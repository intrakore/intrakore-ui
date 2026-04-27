<script>
import { h, mergeProps } from 'vue'
<<<<<<< HEAD
import * as feather from 'feather-icons'
=======
import feather from 'feather-icons'
>>>>>>> 9165654b (feat: first commit)

const validIcons = Object.keys(feather.icons)

export default {
  props: {
    name: {
      type: String,
      required: true,
      validator(value) {
        const valid = validIcons.includes(value)
        if (!valid) {
<<<<<<< HEAD
          console.groupCollapsed(
            '[intrakore-ui] name property for feather-icon must be one of ',
          )
          console.dir(validIcons)
          console.groupEnd()
=======
          console.warn(
            `name property for feather-icon must be one of `,
            validIcons
          )
>>>>>>> 9165654b (feat: first commit)
        }
        return valid
      },
    },
    color: {
      type: String,
      default: null,
    },
    strokeWidth: {
      type: Number,
      default: 1.5,
    },
  },
  render() {
    let icon = feather.icons[this.name]
<<<<<<< HEAD
    if (!icon) {
      icon = feather.icons['circle']
    }
=======
>>>>>>> 9165654b (feat: first commit)
    return h(
      'svg',
      mergeProps(
        icon.attrs,
        {
          fill: 'none',
          stroke: 'currentColor',
          color: this.color,
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'stroke-width': this.strokeWidth,
          width: null,
          height: null,
<<<<<<< HEAD
          class: [icon.attrs.class, 'shrink-0'],
          innerHTML: icon.contents,
        },
        this.$attrs,
      ),
=======
          class: [icon.attrs.class],
          innerHTML: icon.contents,
        },
        this.$attrs
      )
>>>>>>> 9165654b (feat: first commit)
    )
  },
}
</script>
