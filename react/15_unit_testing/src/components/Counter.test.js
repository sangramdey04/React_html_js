/* eslint-disable testing-library/prefer-screen-queries */
 
import Counter from "./Counter"
import {fireEvent, render} from "@testing-library/react"

 describe("Counter",()=>{

    it("Correct initial count",()=>{
        const {getByTestId} = render (<Counter  initial={0}/>);
 
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const countValue = Number(getByTestId("count").textContent);
        expect(countValue).toEqual(0); 
    });
    it("Increment by 1 if button clicked",()=>{
      const{getByTestId,getByRole} = render(<Counter  initial={0}/>);
      const incrementBttn = getByRole("button",{name:"Increment"});
      const CountValue1 =  Number(getByTestId("count").textContent);
      expect(CountValue1).toEqual(0);
      fireEvent.click(incrementBttn);
      const CountValue2 =  Number(getByTestId("count").textContent);
      expect(CountValue2).toEqual(1);

    })

    it("Decrement by 1 if button clicked",()=>{
      const{getByTestId,getByRole} = render(<Counter  initial={0}/>);
      const decrementBttn = getByRole("button",{name:"Decrement"});
      const CountValue1 =  Number(getByTestId("count").textContent);
      expect(CountValue1).toEqual(0);
      fireEvent.click(decrementBttn);
      const CountValue2 =  Number(getByTestId("count").textContent);
      expect(CountValue2).toEqual(-1);

      

    })
 });