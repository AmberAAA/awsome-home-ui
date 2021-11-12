import { User } from "@/types";
import { shallowMount } from "@vue/test-utils";
import { expect } from "chai";
import MySetup from "@/components/MySetup.vue";

describe("test setup API", () => {
  it("test reactive", () => {
    const user: User = {
      name: "Amber",
      age: 12,
      address: "Xi an",
    };
    const wrapper = shallowMount(MySetup, {
      props: { user },
    });
    expect(wrapper.exists()).to.been.true;
  });
});
