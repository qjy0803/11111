/**
 * 雷电预警离线包 · 运行时配置
 * ─────────────────────────────────────────────────────────────
 * 说明：
 *   - 本文件在 dist-lightning/ 内与 index.html 同级，由 index.html
 *     在主 bundle 之前通过 <script src="./config.js"></script> 引入
 *   - 修改下方 baseURL 即可切换后端地址，无需重新构建
 *   - 部署到服务器或现场演示时，按实际网络地址调整即可
 *
 * 字段说明：
 *   deviceApiBase  → 设备管理后端（队友后端 8080，提供 /api/device CRUD）
 *   monitorApiBase → 雷电监测后端（9201 端口，提供 /api/lightning/list）
 *
 * 提示：file:// 协议下 axios 跨域请求会被浏览器拦截，属正常现象；
 *      部署到 http(s):// 服务器后即可正常调用接口。
 */
;(function () {
  window.__APP_CONFIG__ = {
    // 设备管理后端（CRUD）
    deviceApiBase: 'http://127.0.0.1:8080/api',
    // 雷电监测后端（HTTP 接口）
    monitorApiBase: 'http://localhost:9201/api',
  }
})()
