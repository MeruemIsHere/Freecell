import { renderHook } from "@testing-library/react"

export function resetHook(hook: any, initialValue?: any) {
    const { result } = renderHook(() => hook(initialValue))
    return result
}