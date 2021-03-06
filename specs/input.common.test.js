
import React from "react";
import ReactDOM from "react-dom";
import { shallow, toEqual } from "enzyme";
import Input from "./../src";
import CommonValidation from "./common.helpers"

const commonInput = [
  "button",
  "password",
  "radio",
  "select",
  "text",
  "textarea"
]

commonInput.forEach(thisInput => {
  const basicInput = () => {
    switch (thisInput) {
      case "radio":
        return <Input
          type={thisInput}
          identifier="testInput"
          labelContent="Test Input"
          name="TestRadio"
          childValues={
            [
              {
                value: "testInputRadioA",
                label: "testInputRadioA"
              },
              {
                value: "testInputRadioB",
                label: "testInputRadioB"
              }
            ]
          }
        />

      case "select":
        return <Input
          type={thisInput}
          identifier="testInput"
          labelContent="Test Input"
          childValues={
            [
              {
                name: "testInputSelectA",
                value: "testInputSelectA",
                label: "testInputSelectA"
              },
              {
                name: "testInputSelectB",
                value: "testInputSelectB",
                label: "testInputSelectB"
              }
            ]
          }
        />

      default:
        return <Input
          type={thisInput}
          identifier="testInput"
          labelContent="Test Input"
        />
    }
  }

  it(thisInput + " - renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      basicInput(),
      div
    );
  });

  it(thisInput + " - should have a html div container", () => {
    const wrapper = shallow(
      basicInput()
    );
    let container = wrapper.find("#testInput");

    expect(container.length).toEqual(1);
  });

  it(thisInput + " - container has appropriate classes", () => {
    const wrapper = shallow(
      basicInput()
    );
    let container = wrapper.find(
      "[className='input input-container input-" + thisInput + " input-untouched input-nofocus input-novalidation']"
    );

    expect(container.length).toEqual(1);
  });

  it(thisInput + " - container has appropriate classes when over-ridden with single string", () => {
    const wrapper = shallow(
      <Input
        type={thisInput}
        identifier="testInput"
        labelContent="Test Input"
        containerClassNames="reniatnoc"
      />
    );
    let container = wrapper.find(
      "[className='reniatnoc reniatnoc-container reniatnoc-" + thisInput + " reniatnoc-untouched reniatnoc-nofocus reniatnoc-novalidation']"
    );

    expect(container.length).toEqual(1);
  });

  it(thisInput + " - container has appropriate classes when over-ridden with array of strings", () => {
    const wrapper = shallow(
      <Input
        type={thisInput}
        identifier="testInput"
        labelContent="Test Input"
        containerClassNames={["reniatnoc", "reniatno"]}
      />
    );
    let container = wrapper.find(
      "[className='reniatnoc reniatnoc-container reniatnoc-" + thisInput + " reniatnoc-untouched reniatnoc-nofocus reniatnoc-novalidation reniatno reniatno-container reniatno-" + thisInput + " reniatno-untouched reniatno-nofocus reniatno-novalidation']"
    );

    expect(container.length).toEqual(1);
  });


  it(thisInput + " - should have a html label element", () => {
    const wrapper = shallow(
      basicInput()
    );
    let label = wrapper.find(".label").prop("children");

    expect(label).toContain("Test Input");
  });

  it(thisInput + " - label should have appropraite classes", () => {
    const wrapper = shallow(
      basicInput()
    );
    let label = wrapper.find(
      "[className='label label-container label-" + thisInput + " label-untouched label-nofocus label-novalidation']"
    );

    expect(label.length).toEqual(1);
  });

  it(thisInput + " - label should have appropraite classes when over-ridden with an array of strings", () => {
    const wrapper = shallow(
      <Input
        type={thisInput}
        identifier="testInput"
        labelContent="Test Input"
        labelClassNames={["lebal", "leba"]}
      />
    );
    let label = wrapper.find(
      "[className='lebal lebal-container lebal-" + thisInput + " lebal-untouched lebal-nofocus lebal-novalidation leba leba-container leba-" + thisInput + " leba-untouched leba-nofocus leba-novalidation']"
    );

    expect(label.length).toEqual(1);
  });

  // Select, textarea, elements do not have a html input element.
  if (thisInput !== 'select' && thisInput !== 'textarea') {
    it(thisInput + " - should have a html input element", () => {
      const wrapper = shallow(
        basicInput()
      );
      let input = wrapper.find("input");

      expect(input.length).toBeGreaterThanOrEqual(1);
    });
  }

  it(thisInput + " - input should have appropriate classes", () => {
    const wrapper = shallow(
      basicInput()
    );
    let input = wrapper.find(
      "[className='" + thisInput + " " + thisInput + "-container " + thisInput + "-" + thisInput + " " + thisInput + "-untouched " + thisInput + "-nofocus " + thisInput + "-novalidation']"
    );

    expect(input.length).toEqual(1);
  });

  it(thisInput + " - input should have appropriate classes when over-ridden with an array of strings", () => {
    const wrapper = shallow(
      <Input
        type={thisInput}
        identifier="testInput"
        labelContent="Test Input"
        inputClassNames={["tupni", "tupn"]}
      />
    );
    let input = wrapper.find(
      "[className='tupni tupni-container tupni-" + thisInput + " tupni-untouched tupni-nofocus tupni-novalidation tupn tupn-container tupn-" + thisInput + " tupn-untouched tupn-nofocus tupn-novalidation']"
    );

    expect(input.length).toEqual(1);
  });

  it(thisInput + " - should have a html p (validation) element", () => {
    const wrapper = shallow(
      <Input
        type={thisInput}
        identifier="testInput"
        labelContent="Test Input"
        validation={CommonValidation.greaterThanZero}
      />
    );
    let input = wrapper.find("p");

    expect(input.length).toEqual(1);
  });

  it(thisInput + " - p (validation) should have appropriate classes", () => {
    const wrapper = shallow(
      <Input
        type={thisInput}
        identifier="testInput"
        labelContent="Test Input"
        validation={CommonValidation.greaterThanZero}
      />
    );
    let input = wrapper.find(
      "[className='validation validation-container validation-" + thisInput + " validation-untouched validation-nofocus validation-validation validation-invalid']"
    );

    expect(input.length).toEqual(1);
  });

  it(thisInput + " - p (validation) should have appropriate classes when over-ridden by an array of strings", () => {
    const wrapper = shallow(
      <Input
        type={thisInput}
        identifier="testInput"
        labelContent="Test Input"
        validation={CommonValidation.greaterThanZero}
        validationClassNames={["noitadilav", "noitadila"]}
      />
    );
    let input = wrapper.find(
      "[className='noitadilav noitadilav-container noitadilav-" + thisInput + " noitadilav-untouched noitadilav-nofocus noitadilav-validation noitadilav-invalid noitadila noitadila-container noitadila-" + thisInput + " noitadila-untouched noitadila-nofocus noitadila-validation noitadila-invalid']"
    );

    expect(input.length).toEqual(1);
  });

  it(thisInput + " - accepts, and renders, name property text", () => {
    const wrapper = shallow(
      <Input
        type={thisInput}
        identifier="testInput"
        labelContent="Test Input"
        name="name Text"
      />
    );

    let name = wrapper.find("[name='name Text']");

    expect(name.length).toEqual(1);
  });

  it(thisInput + " - accepts, and renders, name property text - control (ensures no false positive)", () => {
    const wrapper = shallow(
      <Input
        type={thisInput}
        identifier="testInput"
        labelContent="Test Input"
        name="name Text"
      />
    );

    let name = wrapper.find("[name='name Text That Doesn\"t Exist']");

    expect(name.length).toEqual(0);
  });

  if (thisInput !== 'radio' && thisInput !== 'select') {
    it(thisInput + " - accepts, and renders, value password", () => {
      const wrapper = shallow(
        <Input
          type={thisInput}
          identifier="testInput"
          labelContent="Test Input"
          value="Test Value"
        />
      );

      let value = wrapper.find("[value='Test Value']");

      expect(value.length).toEqual(1);
    });
  }

  it(thisInput + " - accepts, and renders, placeholder property text", () => {
    const wrapper = shallow(
      <Input
        type={thisInput}
        identifier="testInput"
        labelContent="Test Input"
        placeholder="Placeholder Text"
      />
    );

    let placeholder = wrapper.find("[placeholder='Placeholder Text']");

    expect(placeholder.length).toEqual(1);
  });

  it(thisInput + " - accepts, and renders, placeholder property text - control (ensures no false positive)", () => {
    const wrapper = shallow(
      <Input
        type={thisInput}
        identifier="testInput"
        labelContent="Test Input"
        placeholder="Placeholder Text"
      />
    );

    let placeholder = wrapper.find(
      "[placeholder='Placeholder Text That Doesn\"t Exist']"
    );

    expect(placeholder.length).toEqual(0);
  });

  it(thisInput + " - component contains a " + thisInput + "-nofocus class default", () => {
    const wrapper = shallow(
      basicInput()
    );

    let hasNoFocus = wrapper.find("." + thisInput + "-nofocus");

    expect(hasNoFocus.length).toEqual(1);
  });

  if (thisInput !== "button") {
    it(thisInput + " - component contains an input-focus class upon receiving focus", () => {
      const wrapper = shallow(
        basicInput()
      );

      let hasNoFocus = wrapper.find(".input-nofocus");

      expect(hasNoFocus.length).toEqual(1);

      wrapper.find(".input").first().simulate('focus');

      let nowHasFocus = wrapper.find(".input-focus");

      expect(nowHasFocus.length).toEqual(1);
    });
  }

  it(thisInput + " - component contains a " + thisInput + "-nofocus class upon receiving focus, then again losing focus", () => {
    const wrapper = shallow(
      basicInput()
    );

    let hasNoFocus = wrapper.find("." + thisInput + "-nofocus");
    expect(hasNoFocus.length).toEqual(1);

    wrapper.find(".input").simulate("focus");
    let nowHasFocus = wrapper.find("." + thisInput + "-focus");
    expect(nowHasFocus.length).toEqual(1);

    wrapper.find(".input").simulate("blur");
    let noLongerHasFocus = wrapper.find("." + thisInput + "-nofocus");
    expect(noLongerHasFocus.length).toEqual(1);
  });

  it(thisInput + " - component contains a " + thisInput + "-untouched class default", () => {
    const wrapper = shallow(
      basicInput()
    );

    let hasNoTouched = wrapper.find("." + thisInput + "-untouched");

    expect(hasNoTouched.length).toEqual(1);
  });

  it(thisInput + " - component contains a " + thisInput + "-untouched class upon change (Touched), and is retained on blur", () => {
    const wrapper = shallow(
      basicInput()
    );

    let hasNoTouched = wrapper.find("." + thisInput + "-untouched");
    expect(hasNoTouched.length).toEqual(1);

    wrapper.find(".input").first().simulate("change", { target: { value: "a" } });
    let nowHasTouched = wrapper.find("." + thisInput + "-touched");
    expect(nowHasTouched.length).toEqual(1);

    wrapper.find(".input").simulate("blur");
    let stillRetainsTouched = wrapper.find("." + thisInput + "-touched");
    expect(stillRetainsTouched.length).toEqual(1);
  });

  // Need to fix this for radio - inputs are childValues and do not
  //  receive these same behaviors.. yet.
  if (thisInput !== "select") {
    it(thisInput + " - accepts an onChange object, and updates the state of onChange with appropraite response criteria", () => {
      const wrapper = shallow(
        <Input
          type={thisInput}
          onChange={() => {
            return { result: true };
          }}
          identifier="testInput"
          labelContent="Test Input"
        />
      );

      wrapper.find(".input").first().simulate("change", { target: { value: "a" } });

      expect(wrapper.state("onChangeCallback")).toEqual({ result: true });
    });

    it(thisInput + " - accepts an onChange object [array of], and updates the state of onChange with the appropriate response criteria", () => {
      const wrapper = shallow(
        <Input
          type={thisInput}
          onChange={[
            () => {
              return { result: true };
            },
            () => {
              return { result: false };
            }
          ]}
          identifier="testInput"
          labelContent="Test Input"
        />
      );

      wrapper.find(".input").simulate("change", { target: { value: "a" } });

      expect(wrapper.state("onChangeCallback") instanceof Array).toEqual(true);

      expect(wrapper.state("onChangeCallback")[0]).toEqual({ result: true });
      expect(wrapper.state("onChangeCallback")[1]).toEqual({ result: false });
    });

    it(thisInput + " - component accepts disabled propery, which inhibits changing value", () => {
      const wrapper = shallow(
        <Input type={thisInput} identifier="testInput" labelContent="Test Input" disabled={true} />
      );

      let hasNoTouched = wrapper.find("." + thisInput + "-untouched");

      expect(hasNoTouched.length).toEqual(1);

      expect(wrapper.find(".input").html().includes('disabled')).toEqual(true);

      wrapper.find(".input").simulate("simulate", { target: { value: "ab" } });

      let nowHasTouched = wrapper.find("." + thisInput + "-untouched");

      expect(nowHasTouched.length).toEqual(1);

      expect(wrapper.state('value')).toEqual('');
    });

    it(thisInput + " - accepts an onClick object, and updates the state of onClick with appropraite response criteria", () => {
      const wrapper = shallow(
        <Input
          type={thisInput}
          onClick={() => {
            return { result: true };
          }}
          identifier="testInput"
          labelContent="Test Input"
        />
      );

      wrapper.find(".input").simulate("click");

      expect(wrapper.state("onClickCallback")).toEqual({ result: true });
    });

    it(thisInput + " - accepts an onClick object [array of], and updates the state of onClick with the appropriate response criteria", () => {
      const wrapper = shallow(
        <Input
          type={thisInput}
          onClick={[
            () => {
              return { result: true };
            },
            () => {
              return { result: false };
            }
          ]}
          identifier="testInput"
          labelContent="Test Input"
        />
      );

      wrapper.find(".input").simulate("click");

      expect(wrapper.state("onClickCallback") instanceof Array).toEqual(true);

      expect(wrapper.state("onClickCallback")[0]).toEqual({ result: true });
      expect(wrapper.state("onClickCallback")[1]).toEqual({ result: false });
    });

    it(thisInput + " - accepts an onFocus object, and updates the state of onFocus with appropraite response criteria", () => {
      const wrapper = shallow(
        <Input
          type={thisInput}
          onFocus={() => {
            return { result: true };
          }}
          identifier="testInput"
          labelContent="Test Input"
        />
      );

      // Appears to have the same "focus" effect.
      wrapper.find(".input").simulate("focus");

      expect(wrapper.state("onFocusCallback")).toEqual({ result: true });
    });

    it(thisInput + " - accepts an onFocus object [array of], and updates the state of onFocus with the appropriate response criteria", () => {
      const wrapper = shallow(
        <Input
          type={thisInput}
          onFocus={[
            () => {
              return { result: true };
            },
            () => {
              return { result: false };
            }
          ]}
          identifier="testInput"
          labelContent="Test Input"
        />
      );

      // Appears to have the same "focus" effect.
      wrapper.find(".input").simulate("focus");

      expect(wrapper.state("onFocusCallback") instanceof Array).toEqual(true);

      expect(wrapper.state("onFocusCallback")[0]).toEqual({ result: true });
      expect(wrapper.state("onFocusCallback")[1]).toEqual({ result: false });
    });

    it(thisInput + " - accepts an onBlur object, and updates the state of onBlur with appropraite response criteria", () => {
      const wrapper = shallow(
        <Input
          type={thisInput}
          onBlur={() => {
            return { result: true };
          }}
          identifier="testInput"
          labelContent="Test Input"
        />
      );

      // Appears to have the same "focus" effect.
      wrapper.find(".input").simulate("focus");
      wrapper.find(".input").simulate("blur");

      expect(wrapper.state("onBlurCallback")).toEqual({ result: true });
    });

    it(thisInput + " - accepts an onBlur object [array of], and updates the state of onBlur with the appropriate response criteria", () => {
      const wrapper = shallow(
        <Input
          type={thisInput}
          onBlur={[
            () => {
              return { result: true };
            },
            () => {
              return { result: false };
            }
          ]}
          identifier="testInput"
          labelContent="Test Input"
        />
      );

      // Appears to have the same "focus" effect.
      wrapper.find(".input").simulate("focus");
      wrapper.find(".input").simulate("blur");

      expect(wrapper.state("onBlurCallback") instanceof Array).toEqual(true);

      expect(wrapper.state("onBlurCallback")[0]).toEqual({ result: true });
      expect(wrapper.state("onBlurCallback")[1]).toEqual({ result: false });
    });
  }

  it(thisInput + " - accepts an onComponentDidMount object, and updates the state of onComponentDidMount with appropraite response criteria", () => {
    const wrapper = shallow(
      <Input
        type={thisInput}
        onComponentDidMount={() => {
          return { result: true };
        }}
        identifier="testInput"
        labelContent="Test Input"
      />
    );

    expect(wrapper.state("onComponentDidMountCallback")).toEqual({
      result: true
    });
  });

  it(thisInput + " - accepts an onComponentDidMount object [array of], and updates the state of onComponentDidMount with the appropriate response criteria", () => {
    const wrapper = shallow(
      <Input
        type={thisInput}
        onComponentDidMount={[
          () => {
            return { result: true };
          },
          () => {
            return { result: false };
          }
        ]}
        identifier="testInput"
        labelContent="Test Input"
      />
    );

    expect(wrapper.state("onComponentDidMountCallback") instanceof Array).toEqual(
      true
    );

    expect(wrapper.state("onComponentDidMountCallback")[0]).toEqual({
      result: true
    });
    expect(wrapper.state("onComponentDidMountCallback")[1]).toEqual({
      result: false
    });
  });
});


// To Do - VALIDATION
// To Do - VALUEMASK