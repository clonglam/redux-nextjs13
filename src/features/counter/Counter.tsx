"use client"
import React from "react"
import type { RootState } from "@/lib/store"
import { useSelector, useDispatch } from "react-redux"
import { decrement, increment } from "./counterSlice"

function Counter() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="w-full ">
      <div className="flex justify-center gap-5">
        <button
          className="border-1px"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default Counter
