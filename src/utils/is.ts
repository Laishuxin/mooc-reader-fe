import { isNull, isUndefined } from 'lodash-es'

export { isArray, isFunction, isObject, isString, isPromise } from '@vue/shared'
export { isUndefined, isNull } from 'lodash-es'

export const isDef = (v: unknown) => v != null
export const isUnDef = (v: unknown) => v == null
export const isVoid = (v: unknown) => v == null || v == ''
export const isNotVoid = (v: unknown) => isVoid(v) == false
