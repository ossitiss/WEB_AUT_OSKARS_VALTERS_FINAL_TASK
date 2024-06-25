import { automation_practice } from "../page_objects/automation_practice.page";

describe('Final_Task', () => {
  context("Practice_Form", () => { 

    it('Practice_Form', () => {
      // https://demoqa.com/automation-practice-form
      automation_practice.visit();
     
      automation_practice.enterFirstName.type("Janis");
      automation_practice.enterLastName.type("Berzins");
      automation_practice.enterUserEmail.type("email@email.lv");
      automation_practice.checkRadioButton("Male").check({force: true});
      automation_practice.enterPhoneNr.type("9876543210");
      
      automation_practice.clickdateOfBirthInput.click();
      automation_practice.selectMonth.select(1);
      automation_practice.selectYear.select('1930');
      automation_practice.selectDay.click();
      
      automation_practice.selectSubject.type("Economics{enter}");
      automation_practice.selectMusicCheckbox("hobbies-checkbox-3").check({force: true});
      automation_practice.uploadImg;
      automation_practice.writeAdress.type("Random Adress 10-20");
      automation_practice.selectState.type("NCR{enter}");
      automation_practice.selectCity.type("Delhi{enter}{enter}");
      automation_practice.tbodyRowToTest;
    })
  });
})