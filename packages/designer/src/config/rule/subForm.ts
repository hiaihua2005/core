import { uniqueId } from '@ai-lowcode/utils'

import { DragRule } from '@/designer'

const label = '分组'
const name = 'subForm'

export default <DragRule>{
  menu: 'subform',
  icon: 'icon-group',
  label,
  name,
  inside: false,
  drag: true,
  dragBtn: true,
  mask: false,
  subForm: 'object',
  event: ['change'],
  loadRule(rule: any) {
    rule.children = rule.props.rule || []
    rule.type = 'FcRow'
    delete rule.props.rule
  },
  parseRule(rule: any) {
    rule.props.rule = rule.children
    rule.type = 'subForm'
    delete rule.children
  },
  rule() {
    return {
      type: 'fcRow',
      field: uniqueId(),
      title: '分组',
      info: '',
      $required: false,
      props: {},
      children: [],
    }
  },
  props() {
    return [
      {
        type: 'switch',
        field: 'disabled',
        title: '是否禁用',
      },
      { type: 'switch', field: 'syncDisabled', title: '是否与子表单强制同步禁用状态', value: true },
    ]
  },
}
