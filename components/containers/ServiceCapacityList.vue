<template>
  <div
    class="
      px-4
      md:flex md:flex-row md-px-0
    "
  >

    <div
      class="
        block border-b-2 border-mono-100 justify-center -m-1 pb-6 text-entire-blue-900 text-center
        md:w-7/12 md:border-b-0 md:border-r-2 md:pr-4 md:pb-0
      "
    >
      <div
        v-for="(item, key) in items"
        :key="'tab-' + key"
        class="
          border-2 border-entire-blue-900 cursor-pointer font-semibold inline-block text-sm rounded-full px-3 py-1 m-1
          hover:bg-entire-blue-900 hover:text-white
        "
        :class="{
          'bg-entire-blue-900': (active_item_key === key),
          'text-white': (active_item_key === key)
        }"
        @click="selectItem(key)"
      >
        {{ item.label }}
      </div>

    </div>

    <div
      class="
        mt-8 overflow-x-hidden text-entire-blue-900
        md:w-5/12 md:mt-0 md:px-4
      "
      style="min-height: 190px"
    >
      <transition name="slide-right">
        <div
          v-show="active_item"
          class="-mt-4 flex flex-col h-full items-center justify-center"
        >
          <div
            v-for="(data, key) in active_item.data"
            :key="active_item.label + '-data-' + key"
            class="text-center mt-4"
          >
            <div
              v-if="Array.isArray(data)"
            >
              <p class="font-semibold">{{ data[0] }}:</p>
              <p class="mt-1">{{ data[1] }}</p>
            </div>

            <div
              v-else
              class="font-semibold"
            >
              {{ data }}
            </div>
          </div>
        </div>
      </transition>
    </div>

  </div>
</template>

<script>
  export default {
    name: "ServiceCapacityList",
    data() {
      return {
        active_item_key: 'conventional_turning',
        items: {
          conventional_turning: {
            label: "Conventional Turning",
            data: [
              ["Maximum Diameter", "500mm"],
              ["Maximum Length", "2200mm @ 90mm Diameter"],
            ]
          },
          cnc_turning: {
            label: "CNC Turning",
            data: [
              ["Maximum Diameter", "432mm"],
              ["Maximum Length", "864mm"],
            ]
          },
          cnc_turning_with_bar: {
            label: "CNC Turning with Bar Feed",
            data: [
              ["Maximum Bar Feed Diameter", "3\" Bright Bar"],
              ["Maximum Length", "1200mm"],
            ]
          },
          conventional_milling: {
            label: "Conventional Milling",
            data: [
              ["Maximum X", "2000mm"],
              ["Maximum Y", "1000mm"],
              ["Maximum Z", "500mm"],
            ]
          },
          cnc_milling: {
            label: "CNC Milling",
            data: [
              ["Maximum X", "2000mm"],
              ["Maximum Y", "1000mm"],
              ["Maximum Z", "546mm"],
            ]
          },
          drilling_tapping: {
            label: "Drilling & Tapping",
            data: [
              "6ft Radial Arm Drill of 3\" Diameter 1m3",
              "Various Drill with Maximum Chuck Size 2\"",
              "XYZ Fast Tap"
            ]
          },
          boring: {
            label: "Boring",
            data: [
              ["With 2 Axis Digital Readouts", "Max Size"]
            ]
          },
          broaching_slotting: {
            label: "Broaching & Slotting",
            data: [
              "12\" Depth x 500mm Maximum Diameter"
            ]
          },
          cnc_laser_profiling_flatbed: {
            label: "CNC Laser Profiling Flatbed",
            data: [
              "4m x 2m Bed",
              "25mm Thick Mild Steel",
              "15mm Thick Stainless Steel",
              "8mm Thick Aluminium",
            ]
          },
          cnc_flame_cutting: {
            label: "CNC Flame Cutting",
            data: [
              "6m x 3m Bed",
              "200mm Thick Stainless Steel"
            ]
          },
        }
      }
    },
    computed: {
      active_item() {
        if (!this.active_item_key || !this.items.hasOwnProperty(this.active_item_key)) {
          return false;
        }

        return this.items[this.active_item_key]
      }
    },
    methods: {
      selectItem(key) {
        if (this.active_item_key === key) {
          return;
        }

        // Update active item after a timeout to force transition
        this.active_item_key = false;
        setTimeout(()=> {
          this.active_item_key = key
        }, 100)
      }
    }
  }
</script>
