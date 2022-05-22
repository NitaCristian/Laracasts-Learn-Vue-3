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

