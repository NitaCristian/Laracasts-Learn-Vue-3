# It's All So Easy

## Things You'll Learn

* Assignment Tagging
* Sets

Added tags to assignments and reviewed the Set data structure which acts like an array but doesn't allow duplicates.

The first modification is adding a tag to our assignments.

```js
assignments = [
    {name: 'Read chapter 4', complete: false, id: 2, tag: 'science'},
]
```

Then I updated the Assignment list to show how many tasks it contains and display all tags under a list's title. Each
tag is a button and when clicked it becomes blue and sets a currentTag variable to that tag.
This helps by allowing us to filter assignments by tag.

```html

<div class="flex gap-2">
    <button
            @click="currentTag = tag"
            v-for="tag in tags"
            :class="{
              'border-blue-500 text-blue-500': currentTag === tag 
            }"
            class="border rounded px-1 py-px text-xs"
    >{{ tag }}
    </button>
</div>
```

# Component Responsibility

## Things You'll Learn

* Component Refactoring
* Component Responsibility

In this lesson, I refactored the list of tags into its own component.

The assignment list only keeps track of the currently selected tag, filtering assignments by tag and lets the component
handle the rendering of the tags.

```html

<assignment-tags
        :initial-tags="assignments.map(a => a.tag)"
        :current-tag="currentTag"
        @change="currentTag = $event"
/>
```

The interaction between the AssignmentList and the AssignmentTags is done by passing the current tag to the child
component and the child component emits an event to signal that the current tag has to change.

The properties of the assignment-tags component changed.

```html

<assignment-tags
        :current-tag="currentTag"
        @change="currentTag = $event"
/>
```

New version uses v-model.

```html

<assignment-tags
        v-model="currentTag"
/>
```

In the Vue component the prop becomes modelValue, and the event that has to be emitted is called update:modelValue.

Instead of modelValue, you can use any other variable name but make sure you use the v-model directive using that same
variable name like this: v-model:var-name.

# Lifecycle Hooks, Fake APIs, and AJAX

## Things You'll Learn

* Component hooks
* json-server
* Promises

We first installed and booted up a server using json-server. Created a db.json database for our assignments.

Then we need to make an AJAX request to this server and retreive this data. This request should be done before the
element is mounted to the app but after it was created so the created() hook is perfect for this.

We make an AJAX request using fetch() to that endpoint and get a Promise back which will be resolved after the response
is available. then() we need the json representation of that response, and then() assign it to our assignments property.