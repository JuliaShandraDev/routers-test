import {createAction, props} from "@ngrx/store";

export namespace ExampleActions {
  export const increaseCount = createAction("INCREASE_COUNT");

  export const sendMessage = createAction("SEND_MESSAGE", props<{ message?: string }>()
  );
  export const getData = createAction("GET_DATA")
  export const getDataSuccess = createAction("GET_DATA_SUCCESS", props<{ data: any }>()
  );

}
