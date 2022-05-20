Pull in Vue 3 through a CDN: https://unpkg.com/vue@3

Create a new application instance of Vue and mount it to an HTML element.
This HTML element will represent a container in which the app will render its content.
Vue has access to this element but nothing else.

```html

<body>
<div id="app"></div>

<script>
    Vue.createApp({}).mount()
</script>
</body>
```

Inside the Vue app, we will create a function called data() which will return a JavaScript object, which will be made
reactive by Vue.
This object is the single source of truth of the application, which means that this is the only place that represents
the state of the application.

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

Boot up a server using the command:

```bash
npx serve
```

Output data using the "Mustache" syntax (double curly braces):

```html

<div id="id">
    {{ greeting }} ({{ greeting.length }})
    <!--        What is up (10)-->
</div>
```

v-model is biding the value of the input and handles listening for when the value changes.

```html
<input type="text" v-model="greeting">
```

The mounted() method will automatically be called by Vue when the component mounts to the page

```html

<script>
    Vue.createApp({
        // ...
        mounted() {

        }
    }).mount()
</script>
```