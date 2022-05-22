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