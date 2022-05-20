"Mustache" syntax does not work in attributes.

```html

<button class="{{ buttonClasses }}">Click me</button>
```

Instead, we have a special directive called v-bind.
We want to bind the attribute class to the result of this expression.
(Bind the class attribute to the value of the variable buttonClasses)

A shortcut to this directive is simply writing :class instead of v-bind:class.

```html

<button v-bind:class="buttonClasses">Click me</button>
<button :class="buttonClasses">Click me</button>
```

Another Vue directive called v-on which attaches an event listener to the element.

In this case, we can use v-on to add a click event listener.
A shorter version of this directive is @click instead of v-on:click.

```html

<button :class="buttonClasses" v-on:click="toggle" ">Click me</button>
<button :class="buttonClasses" @click="toggle" ">Click me</button>
```

You can register methods in the "methods" property in the Vue app.

```html

<script>
    Vue.createApp({
        // ...
        methods: {
            toggle() {
                this.active = !this.active
            }
        }
    }).mount()
</script>
```

The way we have structured our components so far is called the Options API.

In this method, you export an object with all the options (properties and methods). 
Through those properties and methods, you can add functionalities to your application.

You declare your state in the data() method, there are special properties like methods, props, watch to use inside your object, and specific methods like mounted() and created().
