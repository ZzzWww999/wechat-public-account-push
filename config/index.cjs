/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxe6c7f9579eaedc3f',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '692e47e00aed8f0ce825af3ef3bee395',

  PROVINCE: '海南',
  CITY: '海口',

  USERS: [
    {
      // 想要发送的人的名字
      name: '文太胖',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id:'oBNf15l6k4WKGS1WO_flDbTOKydU',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'lnnlL0yT95Oh-kKXzEFChBe9bZNBCg9lwCfMT3W5S7A',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '04-08',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '鲸鲸小胖子', year: '1996', date: '04-08',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '*生日', name: '杰杰大帅哥', year: '1994', date: '10-27',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '09-07',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2020-10-31' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-06-06' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'lnnlL0yT95Oh-kKXzEFChBe9bZNBCg9lwCfMT3W5S7A',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'lnnlL0yT95Oh-kKXzEFChBe9bZNBCg9lwCfMT3W5S7A',
      
 
    }
  ],

}

module.exports = USER_CONFIG
