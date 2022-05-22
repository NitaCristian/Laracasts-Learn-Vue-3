# Handle a Form Submission

## Things You'll Learn

* Form Handling

Improved the aspect of the application.

To let the user add new assignments I added a form in the assignments component.

```html

<form @submit.prevent="add">
    <div class="border border-gray-600 text-black">
        <input type="text" placeholder="New assignment..." v-model="newAssignment" class="p-2">
        <button type="submit" class="bg-white p-2 border-l">Add</button>
    </div>
</form>
```

When the user submits the form, it should prevent its default behaviour of refreshing the page
and add the assignment from the input into the `assignments` array.

To achieve this, a new reactive variable is bound to the input using v-model and the v-on:submit.prevent event listener
is used to call the function `add()` whenever we submit the form.

```js
methods: {
    add()
    {
        this.assignments.push({
            name: this.newAssignment,
            complete: false,
            id: this.assignments.length + 1
        });

        this.newAssignment = '';
    }
}
```

# Parent-Child State Communication

## Things You'll Learn

* Props
* Emitting Events

After refactoring the form into its own component we encounter the following problem:
the assignment name can only be accessed from the AssignmentCreate component and the assignments array can only be
accessed from the Assignment component.

There are two ways to solve this:

1. pass down the assignments array to the child component
2. emit an event from the child component with the new assignment

```js
// AssignmentCreate
export default {
    template: `
      <form @submit.prevent="add">
        <input type="text" placeholder="New assignment..." v-model="newAssignment" class="p-2">
      </form>
    `,

    methods: {
        add() {
            this.$emit('add', this.newAssignment);

            this.newAssignment = '';
        }
    }
}
```

```js
//Assignments
export default {
    template: `
        <assignment-create @add="add"></assignment-create>
    `,
    methods: {
        add(name) {
            this.assignments.push({
                name: name,
                complete: false,
                id: this.assignments.length + 1
            });
        }
    }
}

```