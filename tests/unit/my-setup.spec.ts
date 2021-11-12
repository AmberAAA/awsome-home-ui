import { shallowMount } from "@vue/test-utils";
import { expect } from "chai";
import MySetup from "../../src/components/MySetup.vue";

describe("test setup API", () => {
  it("test ref", () => {
    const wapper = shallowMount(MySetup);
    expect(wapper.exists()).to.been.true;
    expect(wapper.vm.a).to.been.equal(0);
    wapper.vm.handleAdd();
    expect(wapper.vm.a).to.been.equal(1);
  });
});
