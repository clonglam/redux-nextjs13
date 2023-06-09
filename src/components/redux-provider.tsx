"use client"

import { store } from "@/lib/store"
import React, { ReactNode } from "react"
import { Provider } from "react-redux"

type ReduxProviderType = {
  children: ReactNode
}

function ReduxProvider({ children }: ReduxProviderType) {
  return <Provider store={store}>{children}</Provider>
}

export default ReduxProvider
