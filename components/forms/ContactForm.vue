<template>
  <form
    :action="form_action"
    method="POST"
    :name="form_name"
    data-netlify="true"
  >
    <h1
      class="
        font-semibold text-2xl text-center text-mono-700
        md:text-4xl
      "
    >
      Contact Us
    </h1>

    <div>
      <label class="block mt-3">
        <span class="text-mono-700">
          Name
          <span class="text-lg text-orange-600">*</span>
        </span>
        <input
          type="text"
          class="form-input mt-1 block w-full"
          placeholder="Name"
          required
        >
      </label>

      <label class="block mt-3">
        <span class="text-mono-700">
          Email
          <span class="text-lg text-orange-600">*</span>
        </span>
        <input
          type="email"
          class="form-input mt-1 block w-full"
          placeholder="Email"
          required
        >
      </label>

      <label class="block mt-3">
        <span class="text-mono-700">
          Phone
          <span class="text-lg text-orange-600">*</span>
        </span>
        <input
          type="text"
          class="form-input mt-1 block w-full"
          placeholder="Phone"
          required
        >
      </label>

      <label class="block mt-3">
        <span class="text-mono-700">
          Subject
          <span class="text-lg text-orange-600">*</span>
        </span>
        <input
          type="text"
          class="form-input mt-1 block w-full"
          placeholder="Subject"
          required
        >
      </label>

      <label class="block mt-3">
        <span class="text-mono-700">
          Message
          <span class="text-lg text-orange-600">*</span>
        </span>
        <textarea
          class="form-textarea mt-1 block w-full"
          placeholder="Message"
          rows="3"
          required
        />
      </label>

      <div class="mt-4">
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
      form_name: {
        default: "contact",
        type: String
      },
      form_action: {
        default: "/?form_success=true",
        type: String
      }
    }
  }
</script>
