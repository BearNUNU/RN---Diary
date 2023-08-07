import {
  createSlice, // handleActions 대체
  createSelector, // reselect 대체
  createAction, // createActions 대체
  createAsyncThunk, // redux-thunk 수신 간소화
  Selector,
} from "@reduxjs/toolkit"
import {
  INCREASE,
  DECREASE,
  SET_DIFF,
  FETCH_ASYNC_SET_DIFF,
} from "../constants"
import { ICounterState } from "../types"

// selector
const getNumber = (state: ICounterState) => state.number
const getDiff = (state: ICounterState) => state.diff

export const getIncreaseNumber: Selector<ICounterState, number> =
  createSelector(getNumber, getDiff, (number, diff) => number + diff)

export const getDecreaseNumber: Selector<ICounterState, number> =
  createSelector(getNumber, getDiff, (number, diff) => number - diff)

// createActions이 없어서 createAction으로 대체
export const fetchIncrease = createAction(INCREASE)
export const fetchDecrease = createAction(DECREASE)
export const fetchSetDiff = createAction(SET_DIFF, (diff: number) => ({
  payload: { diff },
}))

// 내부 오류처리를 하지 않더라도, pending/fulfilled/rejected 호출됨
// 컴포넌트 내부에서 커스텀하게 오류를 처리할 경우 unwrap으로 프로퍼티를 호출해서 컴포넌트에 처리가능
// const onClick = async () => {
//   try {
//     const result = await dispatch(fetchAsyncSetDiff(diff)).unwrap();
//   } catch (error) {
//   }
// }

// createAsyncThunk 내부에서 오류 처리를 할 경우(단, rejectWithValue 호출하지 않은 경우 에러가 날 경우라도 fulfilled가 호출됨)
export const fetchAsyncSetDiff = createAsyncThunk(
  FETCH_ASYNC_SET_DIFF,
  async (diff: number, thunkAPI) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const { dispatch } = thunkAPI
      dispatch(fetchSetDiff(diff))
    } catch (err) {
      const { rejectWithValue } = thunkAPI
      return rejectWithValue(err.response.data)
    }
  }
)

// reducer, immer 내장
const initialState: ICounterState = {
  number: 0,
  diff: 1,
  loading: false,
  message: "",
}

// redux-actions handleActions 내장
const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {}, // key값으로 정의한 이름으로 자동으로 액션함수 생성
  extraReducers: {
    // 사용자가 정의한 이름의 액션함수가 생성
    [INCREASE]: (state) => {
      state.number = getIncreaseNumber(state)
    },
    [DECREASE]: (state) => {
      state.number = getDecreaseNumber(state)
    },
    [SET_DIFF]: (state, action) => {
      state.diff = action.payload.diff
    },
    [fetchAsyncSetDiff.pending.type]: (state, action) => {
      // 호출 전
      state.loading = true
      state.message = ""
    },
    [fetchAsyncSetDiff.fulfilled.type]: (state, action) => {
      // 성공
      state.loading = true
      state.message = "성공했습니다..."
    },
    [fetchAsyncSetDiff.rejected.type]: (state, action) => {
      // 실패
      state.loading = true
      state.message = "실패했습니다...."
    },
  },
})

export default counter.reducer
