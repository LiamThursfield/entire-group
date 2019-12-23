<template>
  <form
    :action="form_action"
    method="POST"
    :name="form_name"
    data-netlify="true"
    :data-netlify-recaptcha="recaptcha_enabled"
  >
    <h1
      :class="label_colour"
      class="
        font-semibold text-2xl text-center
        md:text-4xl
      "
    >
      {{ form_title }}
    </h1>

    <div>
      <label class="block mt-3">
        <span
          :class="label_colour"
          class="font-semibold"
        >
          Name
          <span class="font-black text-lg text-orange-600">*</span>
        </span>
        <input
          type="text"
          name="name"
          class="form-input mt-1 block w-full"
          placeholder="Name"
          required
        >
      </label>

      <div class="md:flex md:-mx-1">
        <label class="block mt-3 mx-1 w-full">
          <span
            :class="label_colour"
            class="font-semibold"
          >
            Email
            <span class="font-black text-lg text-orange-600">*</span>
          </span>
          <input
            type="email"
            name="email"
            class="form-input mt-1 block w-full"
            placeholder="Email"
            required
          >
        </label>

        <label class="block mt-3 mx-1 w-full">
          <span
            :class="label_colour"
            class="font-semibold"
          >
            Phone
            <span class="font-black text-lg text-orange-600">*</span>
        </span>
          <input
            type="text"
            name="phone"
            class="form-input mt-1 block w-full"
            placeholder="Phone"
            required
          >
        </label>
      </div>

      <label class="block mt-3">
        <span
          :class="label_colour"
          class="font-semibold"
        >
          Subject
          <span class="font-black text-lg text-orange-600">*</span>
        </span>
        <input
          type="text"
          name="subject"
          class="form-input mt-1 block w-full"
          placeholder="Subject"
          required
        >
      </label>

      <label class="block mt-3">
        <span
          :class="label_colour"
          class="font-semibold"
        >
          Message
          <span class="font-black text-lg text-orange-600">*</span>
        </span>
        <textarea
          name="message"
          class="form-textarea mt-1 block w-full"
          placeholder="Message"
          rows="3"
          required
        />
      </label>

      <div
        v-if="recaptcha_enabled"
        class="mt-4"
        data-netlify-recaptcha="true"
      ></div>

      <div class="mt-6">
        <button
          type="submit"
          class="
            bg-orange-600 inline-block font-semibold px-8 py-1 rounded text-white
            hover:bg-orange-500 cursor-pointer
          "
        >
          Submit
        </button>
      </div>

    </div>
  </form>
</template>

<script>
  export default {
    name: "ContactForm",
    props: {
      form_action: {
        default: "/?form_success=true",
        type: String
      },
      form_name: {
        default: "contact",
        type: String
      },
      form_title: {
        default: "Contact Us",
        type: String
      },
      label_colour: {
        default: "text-indigo-900",
        type: String
      },
      recaptcha_enabled: {
        default: false,
        type: Boolean
      }
    },
    computed: {
      labelClass() {
        return this.label_colour;
      }
    }
  }
</script>
