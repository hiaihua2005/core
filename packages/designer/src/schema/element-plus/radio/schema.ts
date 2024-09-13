import type { Schema } from '@ai-lowcode/core'
import { uniqueId } from '@ai-lowcode/utils'

import { CompSchema } from '@/types'

const label = '单选框'
const name = 'radio'
const icon = 'fluent:button-16-regular'

export const RadioSchema = <CompSchema>{
  menu: 'main',
  icon,
  label,
  name,
  schema: () => {
    return <Schema>{
      type: 'al-radio',
      id: `__${uniqueId()}`,
      icon,
      label,
      name,
    }
  },
  // 插槽
  slots: () => {},
  // 事件
  events: () => {},
  // 属性
  props: () => {
    return <Schema[]>[
      {
        type: 'al-form',
        id: 'al-form',
        field: 'props',
        modelField: 'modelValue',
        props: {
          labelWidth: 100,
          labelPosition: 'top',
          size: 'small',
        },
        children: [
        ],
      },
    ]
  },
}
