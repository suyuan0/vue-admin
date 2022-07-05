export default {
  path: '/sys/dicts',
  name: 'sysDicts',
  meta: {
    title: '数字字典',
    icon: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-78e17ca8=""><path fill="currentColor" d="M704 192h160v736H160V192h160v64h384v-64zM288 512h448v-64H288v64zm0 256h448v-64H288v64zm96-576V96h256v96H384z"></path></svg>'
  },
  component: () => import('@/views/dicts')
}
