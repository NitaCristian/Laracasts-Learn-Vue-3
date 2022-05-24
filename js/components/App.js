import Assignments from "./Assignments.js";
import Panel from "./Panel.js";

export default {
    components: {
        'assignments': Assignments,
        Panel
    },

    template: `
      <div class="grid gap-6">
      <assignments></assignments>

      <panel>
        This is my default content
      </panel>

      <panel>
        <template v-slot:heading>Hi there</template>
        <template v-slot:default>
          This is my default content
        </template>
      </panel>
      </div>
    `,
}
