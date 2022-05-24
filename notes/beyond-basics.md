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