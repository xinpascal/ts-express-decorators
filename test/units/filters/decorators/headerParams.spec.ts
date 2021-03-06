import {HeaderParamsFilter} from "../../../../src/common/filters/components/HeaderParamsFilter";
import {HeaderParams} from "../../../../src/common/filters/decorators/headerParams";
import {ParamRegistry} from "../../../../src/common/filters/registries/ParamRegistry";
import {Sinon} from "../../../tools";

describe("HeaderParams", () => {
  before(() => {
    this.decorateStub = Sinon.stub(ParamRegistry, "decorate");
    HeaderParams("test");
  });

  after(() => {
    this.decorateStub.restore();
  });

  it("should have been called ParamFilter.decorate method with the correct parameters", () =>
    this.decorateStub.should.have.been.calledOnce.and.calledWithExactly(HeaderParamsFilter, {
      expression: "test"
    }));
});
