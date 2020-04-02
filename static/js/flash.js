/**
 * videojs-flash
 * @version 2.2.0
 * @copyright 2019 Brightcove, Inc.
 * @license Apache-2.0
 */
!function (e, t) { "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("video.js")) : "function" == typeof define && define.amd ? define(["video.js"], t) : e.videojsFlash = t(e.videojs) }(this, function (e) { "use strict"; function t(e) { var t = e.charAt(0).toUpperCase() + e.slice(1); v["set" + t] = function (t) { return this.el_.vjs_setProperty(e, t) } } function r(e) { v[e] = function () { return this.el_.vjs_getProperty(e) } } e = e && e.hasOwnProperty("default") ? e["default"] : e; for (var n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, o = "undefined" != typeof window ? window : void 0 !== n ? n : "undefined" != typeof self ? self : {}, i = function (e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }, a = function (e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }, s = e.getComponent("Tech"), c = e.dom, u = e.url, l = e.createTimeRange, p = e.mergeOptions, f = o && o.navigator || {}, d = function (e) { function t(r, n) { i(this, t); var s = a(this, e.call(this, r, n)); return r.source && s.ready(function () { this.setSource(r.source) }, !0), r.startTime && s.ready(function () { this.load(), this.play(), this.currentTime(r.startTime) }, !0), o.videojs = o.videojs || {}, o.videojs.Flash = o.videojs.Flash || {}, o.videojs.Flash.onReady = t.onReady, o.videojs.Flash.onEvent = t.onEvent, o.videojs.Flash.onError = t.onError, s.on("seeked", function () { this.lastSeekTarget_ = undefined }), s } return function (e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(t, e), t.prototype.createEl = function () { var e = this.options_; e.swf || (e.swf = "https://vjs.zencdn.net/swf/5.4.2/video-js.swf"); var r = e.techId, n = p({ readyFunction: "videojs.Flash.onReady", eventProxyFunction: "videojs.Flash.onEvent", errorEventProxyFunction: "videojs.Flash.onError", autoplay: e.autoplay, preload: e.preload, loop: e.loop, muted: e.muted }, e.flashVars), o = p({ wmode: "opaque", bgcolor: "#000000" }, e.params), i = p({ id: r, name: r, "class": "vjs-tech" }, e.attributes); return this.el_ = t.embed(e.swf, n, o, i), this.el_.tech = this, this.el_ }, t.prototype.play = function () { this.ended() && this.setCurrentTime(0), this.el_.vjs_play() }, t.prototype.pause = function () { this.el_.vjs_pause() }, t.prototype.src = function (e) { return e === undefined ? this.currentSrc() : this.setSrc(e) }, t.prototype.setSrc = function (e) { var t = this; e = u.getAbsoluteURL(e), this.el_.vjs_src(e), this.autoplay() && this.setTimeout(function () { return t.play() }, 0) }, t.prototype.seeking = function () { return this.lastSeekTarget_ !== undefined }, t.prototype.setCurrentTime = function (t) { var r = this.seekable(); r.length && (t = (t = t > r.start(0) ? t : r.start(0)) < r.end(r.length - 1) ? t : r.end(r.length - 1), this.lastSeekTarget_ = t, this.trigger("seeking"), this.el_.vjs_setProperty("currentTime", t), e.prototype.setCurrentTime.call(this)) }, t.prototype.currentTime = function () { return this.seeking() ? this.lastSeekTarget_ || 0 : this.el_.vjs_getProperty("currentTime") }, t.prototype.currentSrc = function () { return this.currentSource_ ? this.currentSource_.src : this.el_.vjs_getProperty("currentSrc") }, t.prototype.duration = function () { if (0 === this.readyState()) return NaN; var e = this.el_.vjs_getProperty("duration"); return e >= 0 ? e : Infinity }, t.prototype.load = function () { this.el_.vjs_load() }, t.prototype.poster = function () { this.el_.vjs_getProperty("poster") }, t.prototype.setPoster = function () { }, t.prototype.seekable = function () { var e = this.duration(); return 0 === e ? l() : l(0, e) }, t.prototype.buffered = function () { var e = this.el_.vjs_getProperty("buffered"); return 0 === e.length ? l() : l(e[0][0], e[0][1]) }, t.prototype.supportsFullScreen = function () { return !1 }, t.prototype.enterFullScreen = function () { return !1 }, t.prototype.getVideoPlaybackQuality = function () { var e = this.el_.vjs_getProperty("getVideoPlaybackQuality"); return o.performance && "function" == typeof o.performance.now ? e.creationTime = o.performance.now() : o.performance && o.performance.timing && "number" == typeof o.performance.timing.navigationStart && (e.creationTime = o.Date.now() - o.performance.timing.navigationStart), e }, t }(s), h = ["rtmpConnection", "rtmpStream", "preload", "defaultPlaybackRate", "playbackRate", "autoplay", "loop", "controls", "volume", "muted", "defaultMuted"], y = ["networkState", "readyState", "initialTime", "startOffsetTime", "paused", "ended", "videoWidth", "videoHeight"], v = d.prototype, m = 0; m < h.length; m++)r(h[m]), t(h[m]); for (var g = 0; g < y.length; g++)r(y[g]); return d.isSupported = function () { return !!(e.browser.IS_CHROME && !e.browser.IS_ANDROID || e.browser.IS_SAFARI && !e.browser.IS_IOS || e.browser.IS_EDGE) || d.version()[0] >= 10 }, s.withSourceHandlers(d), d.nativeSourceHandler = {}, d.nativeSourceHandler.canPlayType = function (e) { return e in d.formats ? "maybe" : "" }, d.nativeSourceHandler.canHandleSource = function (e, t) { var r = void 0; return r = e.type ? e.type.replace(/;.*/, "").toLowerCase() : function (e) { var t = u.getFileExtension(e); return t ? "video/" + t : "" }(e.src), d.nativeSourceHandler.canPlayType(r) }, d.nativeSourceHandler.handleSource = function (e, t, r) { t.setSrc(e.src) }, d.nativeSourceHandler.dispose = function () { }, d.registerSourceHandler(d.nativeSourceHandler), d.formats = { "video/flv": "FLV", "video/x-flv": "FLV", "video/mp4": "MP4", "video/m4v": "MP4" }, d.onReady = function (e) { var t = c.$("#" + e), r = t && t.tech; r && r.el() && d.checkReady(r) }, d.checkReady = function (e) { e.el() && (e.el().vjs_getProperty ? e.triggerReady() : this.setTimeout(function () { d.checkReady(e) }, 50)) }, d.onEvent = function (e, t) { var r = c.$("#" + e).tech, n = Array.prototype.slice.call(arguments, 2); r.setTimeout(function () { r.trigger(t, n) }, 1) }, d.onError = function (e, t) { var r = c.$("#" + e).tech; if ("srcnotfound" === t) return r.error(4); "string" == typeof t ? r.error("FLASH: " + t) : (t.origin = "flash", r.error(t)) }, d.version = function () { var e = "0,0,0"; try { e = new o.ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1] } catch (t) { try { f.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (e = (f.plugins["Shockwave Flash 2.0"] || f.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1]) } catch (r) { } } return e.split(",") }, d.embed = function (e, t, r, n) { var o = d.getEmbedCode(e, t, r, n); return c.createEl("div", { innerHTML: o }).childNodes[0] }, d.getEmbedCode = function (e, t, r, n) { var o = "", i = "", a = ""; return t && Object.getOwnPropertyNames(t).forEach(function (e) { o += e + "=" + t[e] + "&amp;" }), r = p({ movie: e, flashvars: o, allowScriptAccess: "always", allowNetworking: "all" }, r), Object.getOwnPropertyNames(r).forEach(function (e) { i += '<param name="' + e + '" value="' + r[e] + '" />' }), n = p({ data: e, width: "100%", height: "100%" }, n), Object.getOwnPropertyNames(n).forEach(function (e) { a += e + '="' + n[e] + '" ' }), '<object type="application/x-shockwave-flash" ' + a + ">" + i + "</object>" }, function (e) { e.streamingFormats = { "rtmp/mp4": "MP4", "rtmp/flv": "FLV" }, e.streamFromParts = function (e, t) { return e + "&" + t }, e.streamToParts = function (e) { var t = { connection: "", stream: "" }; if (!e) return t; var r = e.search(/&(?![\w-]+=)/), n = void 0; return -1 !== r ? n = r + 1 : 0 === (r = n = e.lastIndexOf("/") + 1) && (r = n = e.length), t.connection = e.substring(0, r), t.stream = e.substring(n, e.length), t }, e.isStreamingType = function (t) { return t in e.streamingFormats }, e.RTMP_RE = /^rtmp[set]?:\/\//i, e.isStreamingSrc = function (t) { return e.RTMP_RE.test(t) }, e.rtmpSourceHandler = {}, e.rtmpSourceHandler.canPlayType = function (t) { return e.isStreamingType(t) ? "maybe" : "" }, e.rtmpSourceHandler.canHandleSource = function (t, r) { var n = e.rtmpSourceHandler.canPlayType(t.type); return n || (e.isStreamingSrc(t.src) ? "maybe" : "") }, e.rtmpSourceHandler.handleSource = function (t, r, n) { var o = e.streamToParts(t.src); r.setRtmpConnection(o.connection), r.setRtmpStream(o.stream) }, e.registerSourceHandler(e.rtmpSourceHandler) }(d), s.getTech("Flash") ? (e.log.warn("Not using videojs-flash as it appears to already be registered"), e.log.warn("videojs-flash should only be used with video.js@6 and above")) : e.registerTech("Flash", d), d.VERSION = "2.2.0", d });