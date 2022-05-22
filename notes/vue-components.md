# Your First Custom Vue Component

## Things You'll Learn

* Component Basics

A Vue component are custom elements with their own defined life cycle hooks, behaviour, reactivity, methods and computed
properties.

Some examples of components in an app would be a button, an assignment list, or an assignment list item.

You can register them globally on your app or add them to parent Vue components.

We will add new components to the parent component `app`. Define a new property called `components` and register new
components there.

```html

<script>
    let app = {
        components: {
            'app-button': {},
            'assignment-list': {},
            'assignment-list-item': {},
        }
    }
</script>
```

To use the component, add it like an HTML element.

```html

<div id="app">
    <app-button></app-button>
</div>
```

When we create components, we tuck away logic, markup and behaviour.

Its appearance and template is defined in the `template` property.

```html

<script>
    let app = {
        components: {
            'app-button': {
                template: `
                    <div>What's up</div>
                `,
            },
        }
    };
</script>
```

I can reference the component as many times I want and each one it's like its own instance.

```html

<div id="app">
    <app-button></app-button>
    <app-button></app-button>
    <app-button></app-button>
</div>
```

To make the label different for every component, use the `<slot/>` tag in the component's template.

```html

<script>
    let app = {
        components: {
            'app-button': {
                template: `
                    <button class="bg-gray-200 hover:bg-gray-400 px-5 py-2 :disable='processing'">
                        <slot/>
                    </button>
                `,
            },
        }
    };
</script>
```

# One Vue Component Per File

## Things You'll Learn

* EcmaScript Imports
* Vue components per file

Vue components can be stored as inline child but a much cleaner approach is to declare them in their own file.

Store any components in the directory `./js/components/` with the extension _.js_

We can create a new JavaScript module that can export things to the outside world. In this case, the default thing that
we are exporting is an object.

```js
export default {
    template: `
    `,

    data() {
        return {
            // ...
        };
    }
}
```

Now I want to import this object in my main app and then reference it like we did before.

One issue is that only modules can import other modules.
To solve this, add the **module** type to the script tag. This tells our browsers that this should be treated as a
module.

```html

<script type="module">
    import AppButton from './js/components/AppButton.js'

    let app = {
        components: {
            'app-button': AppButton
        }
    };
</script>
```

# Component Props

## Things You'll Learn

* Props
* Class Object Binding

Extracted App into its own component.

We want to have flexible Vue components, so we need to pass in data from outside. This way, every instance of the
component could have its own set of props.

Declare props using the `props` object. Each prop is an object with a type and optionally, a default value.

```js
export default {
    props: {
        type: {
            type: String,
            default: "primary"
        },

        processing: Boolean
    }
}
```

When you set class bindings you can use a string, an array or an object. The key of the object is our classes and the
value is a Boolean.
If the Boolean is true the classes are added to the element, otherwise they are ignored.

```js
export default {
    template: `
        <button :class="{
            'bg-gray-200': true,
            'bg-blue-200': false,    
        }"
        ></button>
    `,
}
```