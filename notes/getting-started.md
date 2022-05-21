# Vue 3 Absolute Basics

## Things You'll Learn

* Vue.createApp()
* Text Interpolation
* Reactivity

Pull in Vue 3 through a CDN: https://unpkg.com/vue@3

Create a new application instance of Vue and mount it to an HTML element.
This HTML element will represent a **container** in which the application instance will render its content.
Vue has access to this element but **nothing else**.

```html

<div id="app"></div>

<script>
    Vue.createApp({}).mount('#app')
</script>
```

Inside the Vue app, we will create a function called data() which will return a JavaScript object,
which will be made reactive by Vue.

This object is the **single source of truth** of the application,
which means that this is the only place that represents the state of the application.

```html

<script>
    Vue.createApp({
        data() {
            return {
                greeting: 'Hello world'
            };
        }
    }).mount()
</script>
```

Output data using the **"Mustache"** syntax (double curly braces).

```html

<div id="id">
    {{ greeting }} ({{ greeting.length }})
    <!--What is up (10)-->
</div>
```

The `v-model` directive is biding the value of the input and handles listening for when the value changes.

```html
<input type="text" v-model="greeting">
```

The `mounted()` method will automatically be called by Vue when the component mounts to the page

```html

<script>
    Vue.createApp({
        mounted() {
            alert('I am mounted!');
        }
    }).mount()
</script>
```

# Attribute Binding and Event Handling

## Things You'll Learn

* v-bind
* v-on

"Mustache" syntax does not work in attributes.

```html

<button class="{{ buttonClasses }}">This doesn't work</button>
```

The directive `v-bind` is used in this case.
We want to bind the attribute "class" to the result of the expression (in this case, the value of the variable
buttonClasses).

A shortcut to this directive is simply writing `:class` instead of v-bind:class.

```html

<button v-bind:class="buttonClasses">Click me</button>
<button :class="buttonClasses">Click me</button>
```

The directive `v-on` which attaches an event listener to the element.
We can use v-on to add a click event listener.

A shorter version of this directive is `@click` instead of v-on:click.

```html

<button :class="buttonClasses" v-on:click="toggle" ">Click me</button>
<button :class="buttonClasses" @click="toggle" ">Click me</button>
```

You can register methods in the **"methods"** property in the Vue app.

```html

<script>
    Vue.createApp({
        methods: {
            toggle() {
                this.active = !this.active
            }
        }
    }).mount()
</script>
```

The way we have structured our components so far is called the **Options API**.

In this method, you export an object with all the **options** (properties and methods).
Through those properties and methods, you can add functionalities to your application.

You declare your state in the `data()` method,
there are special properties like `methods` and `computed`,
props, watch to use inside your object,
and specific methods like `mounted()` and `created()`.

# Lists, Conditionals, and Computed Properties

## Things You'll Learn:

* Computed Properties
* Conditionals
* Loops

Using the example of an assignment tracking app, we'll learn how to loop over arrays,
conditionally display HTML, and prepare computed properties.

The main component can be extracted.

```html

<script>
    let app = {
        // ...
    };

    Vue.createApp(app).mount('#app');
</script>
```

Create a list of assignments, where each assignment is an object with a name and whether it has been completed.

```html

<script>
    let app = {
        data() {
            return {
                assignments: [
                    {name: 'Finish project', complete: false},
                    {name: 'Read chapter 4', complete: false},
                    {name: 'Turn in homework', complete: false},
                ]
            }
        },
    }
</script>
```

The `v-for` directive is used to loop over a collection of data and render the element multiple times.

```html

<ul>
    <li v-for="assignment in completedAssignments" :key="assignment.id">
        <!--Content here-->
    </li>
</ul>
```

Adding a key to our assignments is important because Vue needs to know how to update the items.

Without keys, Vue uses an algorithm that minimizes element movement and 
tries to patch/reuse elements of the same type in-place as much as possible.

With keys, it will reorder elements based on the order change of keys, 
and elements with keys that are no longer present will always be removed / destroyed.

```html

<script>
    let app = {
        data() {
            return {
                assignments: [
                    {name: 'Finish project', complete: false, id: 1},
                    {name: 'Read chapter 4', complete: false, id: 2},
                    {name: 'Turn in homework', complete: false, id: 3},
                ]
            }
        }
    };

</script>
```

The directives `v-if` and `v-show` are used to conditionally render an element based on an expression.

* v-show toggles the element's visibility based on the truth value of the expression.
* v-if conditionally render an element based on the truth value of the expression.

```html

<section v-if="inProgressAssignments.length">
    <!--    Content here-->
</section>
```

To remove duplication we use computed properties.

The object called `computed` contains methods that can be cached.

A computed property will only re-evaluate when some of its reactive dependencies have changed, 
otherwise it will immediately return the previously computed result without having to run the getter function again.

```html

<script>
    let app = {
        computed: {
            inProgressAssignments() {
                return this.assignments.filter(a => !a.complete)
            },
        }
    };
</script>
```