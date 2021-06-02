import * as ActionType from "../action";

export const StoreQuestionList = (fetchData) =>
{
    return {
        type:ActionType.SETEXPLORETALKDATA,
        fetchData:fetchData
    }
}

export const RemoveQuestionList = () =>
{
    return {
        type:ActionType.REMOVEEXPLORETALKDATA,
    }
}

export const SelectQuestionDetail = (selectQuestion) =>
{
    return {
        type:ActionType.SELECTEXPLORETALKDATA,
        selectQuestion:selectQuestion
    }
}
export const DeSelectQuestionDetail = () =>
{
    return {
        type:ActionType.DESELECTEXPLORETALKDATA
    }
}
