import AssignmentList from "./AssignmentList.js";

export default {
    components: {
        'assignment-list': AssignmentList
    },

    template: `
      <section class="space-y-6">
      <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
      <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>

      <form @submit.prevent="add">
        <div class="border border-gray-600 text-black">
          <input type="text" placeholder="New assignment..." v-model="newAssignment" class="p-2">
          <button type="submit" class="bg-white p-2 border-l">Add</button>
        </div>
      </form>
      </section>
    `,

    data() {
        return {
            assignments: [
                {name: 'Finish project', complete: false, id: 1},
                {name: 'Read chapter 4', complete: false, id: 2},
                {name: 'Turn in homework', complete: false, id: 3},
            ],

            newAssignment: '',
        }
    },

    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(a => !a.complete),
                completed: this.assignments.filter(a => a.complete),
            };
        }
    },

    methods: {
        add() {
            this.assignments.push({
                name: this.newAssignment,
                complete: false,
                id: this.assignments.length + 1
            });

            this.newAssignment = '';
        }
    }
}