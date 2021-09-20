(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    "5EGp": function(e, t, n) {
      "use strict";
      var r = n("63Ad");
      (t.__esModule = !0), (t.default = void 0);
      var o,
        a = r(n("T1e2")),
        i = r(n("QKC2")),
        l = r(n("PE9J")),
        c = r(n("8VmE")),
        s = r(n("mXGw")),
        u = r(n("W0B4")),
        d = function(e) {
          var t = (0, c.default)({}, e),
            n = t.resolutions,
            r = t.sizes,
            o = t.critical;
          return (
            n && ((t.fixed = n), delete t.resolutions),
            r && ((t.fluid = r), delete t.sizes),
            o && (t.loading = "eager"),
            t.fluid && (t.fluid = O([].concat(t.fluid))),
            t.fixed && (t.fixed = O([].concat(t.fixed))),
            t
          );
        },
        f = function(e) {
          var t = e.media;
          return !!t && v && !!window.matchMedia(t).matches;
        },
        m = function(e) {
          var t = e.fluid,
            n = e.fixed,
            r = p(t || n || []);
          return r && r.src;
        },
        p = function(e) {
          if (
            v &&
            (function(e) {
              return (
                !!e &&
                Array.isArray(e) &&
                e.some(function(e) {
                  return void 0 !== e.media;
                })
              );
            })(e)
          ) {
            var t = e.findIndex(f);
            if (-1 !== t) return e[t];
            var n = e.findIndex(function(e) {
              return void 0 === e.media;
            });
            if (-1 !== n) return e[n];
          }
          return e[0];
        },
        h = Object.create({}),
        g = function(e) {
          var t = d(e),
            n = m(t);
          return h[n] || !1;
        },
        b =
          "undefined" != typeof HTMLImageElement &&
          "loading" in HTMLImageElement.prototype,
        v = "undefined" != typeof window,
        y = v && window.IntersectionObserver,
        _ = new WeakMap();
      function w(e) {
        return e.map(function(e) {
          var t = e.src,
            n = e.srcSet,
            r = e.srcSetWebp,
            o = e.media,
            a = e.sizes;
          return s.default.createElement(
            s.default.Fragment,
            { key: t },
            r &&
              s.default.createElement("source", {
                type: "image/webp",
                media: o,
                srcSet: r,
                sizes: a,
              }),
            n &&
              s.default.createElement("source", {
                media: o,
                srcSet: n,
                sizes: a,
              }),
          );
        });
      }
      function O(e) {
        var t = [],
          n = [];
        return (
          e.forEach(function(e) {
            return (e.media ? t : n).push(e);
          }),
          [].concat(t, n)
        );
      }
      function S(e) {
        return e.map(function(e) {
          var t = e.src,
            n = e.media,
            r = e.tracedSVG;
          return s.default.createElement("source", {
            key: t,
            media: n,
            srcSet: r,
          });
        });
      }
      function E(e) {
        return e.map(function(e) {
          var t = e.src,
            n = e.media,
            r = e.base64;
          return s.default.createElement("source", {
            key: t,
            media: n,
            srcSet: r,
          });
        });
      }
      function x(e, t) {
        var n = e.srcSet,
          r = e.srcSetWebp,
          o = e.media,
          a = e.sizes;
        return (
          "<source " +
          (t ? "type='image/webp' " : "") +
          (o ? 'media="' + o + '" ' : "") +
          'srcset="' +
          (t ? r : n) +
          '" ' +
          (a ? 'sizes="' + a + '" ' : "") +
          "/>"
        );
      }
      var j = function(e, t) {
          var n =
            (void 0 === o &&
              "undefined" != typeof window &&
              window.IntersectionObserver &&
              (o = new window.IntersectionObserver(
                function(e) {
                  e.forEach(function(e) {
                    if (_.has(e.target)) {
                      var t = _.get(e.target);
                      (e.isIntersecting || e.intersectionRatio > 0) &&
                        (o.unobserve(e.target), _.delete(e.target), t());
                    }
                  });
                },
                { rootMargin: "200px" },
              )),
            o);
          return (
            n && (n.observe(e), _.set(e, t)),
            function() {
              n.unobserve(e), _.delete(e);
            }
          );
        },
        z = function(e) {
          var t = e.src ? 'src="' + e.src + '" ' : 'src="" ',
            n = e.sizes ? 'sizes="' + e.sizes + '" ' : "",
            r = e.srcSet ? 'srcset="' + e.srcSet + '" ' : "",
            o = e.title ? 'title="' + e.title + '" ' : "",
            a = e.alt ? 'alt="' + e.alt + '" ' : 'alt="" ',
            i = e.width ? 'width="' + e.width + '" ' : "",
            l = e.height ? 'height="' + e.height + '" ' : "",
            c = e.crossOrigin ? 'crossorigin="' + e.crossOrigin + '" ' : "",
            s = e.loading ? 'loading="' + e.loading + '" ' : "",
            u = e.draggable ? 'draggable="' + e.draggable + '" ' : "";
          return (
            "<picture>" +
            e.imageVariants
              .map(function(e) {
                return (e.srcSetWebp ? x(e, !0) : "") + x(e);
              })
              .join("") +
            "<img " +
            s +
            i +
            l +
            n +
            r +
            t +
            a +
            o +
            c +
            u +
            'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'
          );
        },
        C = s.default.forwardRef(function(e, t) {
          var n = e.src,
            r = e.imageVariants,
            o = e.generateSources,
            a = e.spreadProps,
            i = e.ariaHidden,
            l = s.default.createElement(
              k,
              (0, c.default)({ ref: t, src: n }, a, { ariaHidden: i }),
            );
          return r.length > 1
            ? s.default.createElement("picture", null, o(r), l)
            : l;
        }),
        k = s.default.forwardRef(function(e, t) {
          var n = e.sizes,
            r = e.srcSet,
            o = e.src,
            a = e.style,
            i = e.onLoad,
            u = e.onError,
            d = e.loading,
            f = e.draggable,
            m = e.ariaHidden,
            p = (0, l.default)(e, [
              "sizes",
              "srcSet",
              "src",
              "style",
              "onLoad",
              "onError",
              "loading",
              "draggable",
              "ariaHidden",
            ]);
          return s.default.createElement(
            "img",
            (0, c.default)(
              { "aria-hidden": m, sizes: n, srcSet: r, src: o },
              p,
              {
                onLoad: i,
                onError: u,
                ref: t,
                loading: d,
                draggable: f,
                style: (0, c.default)(
                  {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  },
                  a,
                ),
              },
            ),
          );
        });
      k.propTypes = {
        style: u.default.object,
        onError: u.default.func,
        onLoad: u.default.func,
      };
      var M = (function(e) {
        function t(t) {
          var n;
          ((n = e.call(this, t) || this).seenBefore = v && g(t)),
            (n.isCritical = "eager" === t.loading || t.critical),
            (n.addNoScript = !(n.isCritical && !t.fadeIn)),
            (n.useIOSupport = !b && y && !n.isCritical && !n.seenBefore);
          var r = n.isCritical || (v && (b || !n.useIOSupport));
          return (
            (n.state = {
              isVisible: r,
              imgLoaded: !1,
              imgCached: !1,
              fadeIn: !n.seenBefore && t.fadeIn,
              isHydrated: !1,
            }),
            (n.imageRef = s.default.createRef()),
            (n.placeholderRef = t.placeholderRef || s.default.createRef()),
            (n.handleImageLoaded = n.handleImageLoaded.bind((0, a.default)(n))),
            (n.handleRef = n.handleRef.bind((0, a.default)(n))),
            n
          );
        }
        (0, i.default)(t, e);
        var n = t.prototype;
        return (
          (n.componentDidMount = function() {
            if (
              (this.setState({ isHydrated: v }),
              this.state.isVisible &&
                "function" == typeof this.props.onStartLoad &&
                this.props.onStartLoad({ wasCached: g(this.props) }),
              this.isCritical)
            ) {
              var e = this.imageRef.current;
              e && e.complete && this.handleImageLoaded();
            }
          }),
          (n.componentWillUnmount = function() {
            this.cleanUpListeners && this.cleanUpListeners();
          }),
          (n.handleRef = function(e) {
            var t = this;
            this.useIOSupport &&
              e &&
              (this.cleanUpListeners = j(e, function() {
                var e = g(t.props);
                t.state.isVisible ||
                  "function" != typeof t.props.onStartLoad ||
                  t.props.onStartLoad({ wasCached: e }),
                  t.setState({ isVisible: !0 }, function() {
                    t.setState({
                      imgLoaded: e,
                      imgCached: !(
                        !t.imageRef.current || !t.imageRef.current.currentSrc
                      ),
                    });
                  });
              }));
          }),
          (n.handleImageLoaded = function() {
            var e, t, n;
            (e = this.props),
              (t = d(e)),
              (n = m(t)) && (h[n] = !0),
              this.setState({ imgLoaded: !0 }),
              this.props.onLoad && this.props.onLoad();
          }),
          (n.render = function() {
            var e = d(this.props),
              t = e.title,
              n = e.alt,
              r = e.className,
              o = e.style,
              a = void 0 === o ? {} : o,
              i = e.imgStyle,
              l = void 0 === i ? {} : i,
              u = e.placeholderStyle,
              f = void 0 === u ? {} : u,
              m = e.placeholderClassName,
              h = e.fluid,
              g = e.fixed,
              b = e.backgroundColor,
              v = e.durationFadeIn,
              y = e.Tag,
              _ = e.itemProp,
              O = e.loading,
              x = e.draggable,
              j = h || g;
            if (!j) return null;
            var M = !1 === this.state.fadeIn || this.state.imgLoaded,
              P = !0 === this.state.fadeIn && !this.state.imgCached,
              R = (0, c.default)(
                {
                  opacity: M ? 1 : 0,
                  transition: P ? "opacity " + v + "ms" : "none",
                },
                l,
              ),
              H = "boolean" == typeof b ? "lightgray" : b,
              L = { transitionDelay: v + "ms" },
              T = (0, c.default)(
                { opacity: this.state.imgLoaded ? 0 : 1 },
                P && L,
                l,
                f,
              ),
              D = {
                title: t,
                alt: this.state.isVisible ? "" : n,
                style: T,
                className: m,
                itemProp: _,
              },
              V = this.state.isHydrated ? p(j) : j[0];
            if (h)
              return s.default.createElement(
                y,
                {
                  className: (r || "") + " gatsby-image-wrapper",
                  style: (0, c.default)(
                    {
                      position: "relative",
                      overflow: "hidden",
                      maxWidth: V.maxWidth ? V.maxWidth + "px" : null,
                      maxHeight: V.maxHeight ? V.maxHeight + "px" : null,
                    },
                    a,
                  ),
                  ref: this.handleRef,
                  key: "fluid-" + JSON.stringify(V.srcSet),
                },
                s.default.createElement(y, {
                  "aria-hidden": !0,
                  style: {
                    width: "100%",
                    paddingBottom: 100 / V.aspectRatio + "%",
                  },
                }),
                H &&
                  s.default.createElement(y, {
                    "aria-hidden": !0,
                    title: t,
                    style: (0, c.default)(
                      {
                        backgroundColor: H,
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        opacity: this.state.imgLoaded ? 0 : 1,
                        right: 0,
                        left: 0,
                      },
                      P && L,
                    ),
                  }),
                V.base64 &&
                  s.default.createElement(C, {
                    ariaHidden: !0,
                    ref: this.placeholderRef,
                    src: V.base64,
                    spreadProps: D,
                    imageVariants: j,
                    generateSources: E,
                  }),
                V.tracedSVG &&
                  s.default.createElement(C, {
                    ariaHidden: !0,
                    ref: this.placeholderRef,
                    src: V.tracedSVG,
                    spreadProps: D,
                    imageVariants: j,
                    generateSources: S,
                  }),
                this.state.isVisible &&
                  s.default.createElement(
                    "picture",
                    null,
                    w(j),
                    s.default.createElement(k, {
                      alt: n,
                      title: t,
                      sizes: V.sizes,
                      src: V.src,
                      crossOrigin: this.props.crossOrigin,
                      srcSet: V.srcSet,
                      style: R,
                      ref: this.imageRef,
                      onLoad: this.handleImageLoaded,
                      onError: this.props.onError,
                      itemProp: _,
                      loading: O,
                      draggable: x,
                    }),
                  ),
                this.addNoScript &&
                  s.default.createElement("noscript", {
                    dangerouslySetInnerHTML: {
                      __html: z(
                        (0, c.default)({ alt: n, title: t, loading: O }, V, {
                          imageVariants: j,
                        }),
                      ),
                    },
                  }),
              );
            if (g) {
              var I = (0, c.default)(
                {
                  position: "relative",
                  overflow: "hidden",
                  display: "inline-block",
                  width: V.width,
                  height: V.height,
                },
                a,
              );
              return (
                "inherit" === a.display && delete I.display,
                s.default.createElement(
                  y,
                  {
                    className: (r || "") + " gatsby-image-wrapper",
                    style: I,
                    ref: this.handleRef,
                    key: "fixed-" + JSON.stringify(V.srcSet),
                  },
                  H &&
                    s.default.createElement(y, {
                      "aria-hidden": !0,
                      title: t,
                      style: (0, c.default)(
                        {
                          backgroundColor: H,
                          width: V.width,
                          opacity: this.state.imgLoaded ? 0 : 1,
                          height: V.height,
                        },
                        P && L,
                      ),
                    }),
                  V.base64 &&
                    s.default.createElement(C, {
                      ariaHidden: !0,
                      ref: this.placeholderRef,
                      src: V.base64,
                      spreadProps: D,
                      imageVariants: j,
                      generateSources: E,
                    }),
                  V.tracedSVG &&
                    s.default.createElement(C, {
                      ariaHidden: !0,
                      ref: this.placeholderRef,
                      src: V.tracedSVG,
                      spreadProps: D,
                      imageVariants: j,
                      generateSources: S,
                    }),
                  this.state.isVisible &&
                    s.default.createElement(
                      "picture",
                      null,
                      w(j),
                      s.default.createElement(k, {
                        alt: n,
                        title: t,
                        width: V.width,
                        height: V.height,
                        sizes: V.sizes,
                        src: V.src,
                        crossOrigin: this.props.crossOrigin,
                        srcSet: V.srcSet,
                        style: R,
                        ref: this.imageRef,
                        onLoad: this.handleImageLoaded,
                        onError: this.props.onError,
                        itemProp: _,
                        loading: O,
                        draggable: x,
                      }),
                    ),
                  this.addNoScript &&
                    s.default.createElement("noscript", {
                      dangerouslySetInnerHTML: {
                        __html: z(
                          (0, c.default)({ alt: n, title: t, loading: O }, V, {
                            imageVariants: j,
                          }),
                        ),
                      },
                    }),
                )
              );
            }
            return null;
          }),
          t
        );
      })(s.default.Component);
      M.defaultProps = {
        fadeIn: !0,
        durationFadeIn: 500,
        alt: "",
        Tag: "div",
        loading: "lazy",
      };
      var P = u.default.shape({
          width: u.default.number.isRequired,
          height: u.default.number.isRequired,
          src: u.default.string.isRequired,
          srcSet: u.default.string.isRequired,
          base64: u.default.string,
          tracedSVG: u.default.string,
          srcWebp: u.default.string,
          srcSetWebp: u.default.string,
          media: u.default.string,
        }),
        R = u.default.shape({
          aspectRatio: u.default.number.isRequired,
          src: u.default.string.isRequired,
          srcSet: u.default.string.isRequired,
          sizes: u.default.string.isRequired,
          base64: u.default.string,
          tracedSVG: u.default.string,
          srcWebp: u.default.string,
          srcSetWebp: u.default.string,
          media: u.default.string,
          maxWidth: u.default.number,
          maxHeight: u.default.number,
        });
      function H(e) {
        return function(t, n, r) {
          var o;
          if (!t.fixed && !t.fluid)
            throw new Error(
              "The prop `fluid` or `fixed` is marked as required in `" +
                r +
                "`, but their values are both `undefined`.",
            );
          u.default.checkPropTypes((((o = {})[n] = e), o), t, "prop", r);
        };
      }
      M.propTypes = {
        resolutions: P,
        sizes: R,
        fixed: H(u.default.oneOfType([P, u.default.arrayOf(P)])),
        fluid: H(u.default.oneOfType([R, u.default.arrayOf(R)])),
        fadeIn: u.default.bool,
        durationFadeIn: u.default.number,
        title: u.default.string,
        alt: u.default.string,
        className: u.default.oneOfType([u.default.string, u.default.object]),
        critical: u.default.bool,
        crossOrigin: u.default.oneOfType([u.default.string, u.default.bool]),
        style: u.default.object,
        imgStyle: u.default.object,
        placeholderStyle: u.default.object,
        placeholderClassName: u.default.string,
        backgroundColor: u.default.oneOfType([
          u.default.string,
          u.default.bool,
        ]),
        onLoad: u.default.func,
        onError: u.default.func,
        onStartLoad: u.default.func,
        Tag: u.default.string,
        itemProp: u.default.string,
        loading: u.default.oneOf(["auto", "lazy", "eager"]),
        draggable: u.default.bool,
      };
      var L = M;
      t.default = L;
    },
    KFIa: function(e, t, n) {
      "use strict";
      n.r(t);
      var r = n("mXGw"),
        o = n.n(r),
        a = n("zL5+"),
        i = n("OvAC"),
        l = n.n(i),
        c = n("NrWm"),
        s = n("aD51"),
        u = n("3xmD"),
        d = n("HwHs"),
        f = c.a,
        m = function(e) {
          return "theme" !== e && "innerRef" !== e;
        },
        p = function(e) {
          return "string" == typeof e && e.charCodeAt(0) > 96 ? f : m;
        };
      function h(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? h(n, !0).forEach(function(t) {
                l()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : h(n).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      var b = function e(t, n) {
          var o, a, i;
          void 0 !== n &&
            ((o = n.label),
            (i = n.target),
            (a =
              t.__emotion_forwardProp && n.shouldForwardProp
                ? function(e) {
                    return t.__emotion_forwardProp(e) && n.shouldForwardProp(e);
                  }
                : n.shouldForwardProp));
          var l = t.__emotion_real === t,
            c = (l && t.__emotion_base) || t;
          "function" != typeof a && l && (a = t.__emotion_forwardProp);
          var f = a || p(c),
            m = !f("as");
          return function() {
            var h = arguments,
              b =
                l && void 0 !== t.__emotion_styles
                  ? t.__emotion_styles.slice(0)
                  : [];
            if (
              (void 0 !== o && b.push("label:" + o + ";"),
              null == h[0] || void 0 === h[0].raw)
            )
              b.push.apply(b, h);
            else {
              0, b.push(h[0][0]);
              for (var v = h.length, y = 1; y < v; y++) b.push(h[y], h[0][y]);
            }
            var _ = Object(s.e)(function(e, t, n) {
              return Object(r.createElement)(s.b.Consumer, null, function(o) {
                var l = (m && e.as) || c,
                  s = "",
                  h = [],
                  g = e;
                if (null == e.theme) {
                  for (var v in ((g = {}), e)) g[v] = e[v];
                  g.theme = o;
                }
                "string" == typeof e.className
                  ? (s = Object(u.a)(t.registered, h, e.className))
                  : null != e.className && (s = e.className + " ");
                var y = Object(d.a)(b.concat(h), t.registered, g);
                Object(u.b)(t, y, "string" == typeof l);
                (s += t.key + "-" + y.name), void 0 !== i && (s += " " + i);
                var _ = m && void 0 === a ? p(l) : f,
                  w = {};
                for (var O in e) (m && "as" === O) || (_(O) && (w[O] = e[O]));
                return (
                  (w.className = s),
                  (w.ref = n || e.innerRef),
                  Object(r.createElement)(l, w)
                );
              });
            });
            return (
              (_.displayName =
                void 0 !== o
                  ? o
                  : "Styled(" +
                    ("string" == typeof c
                      ? c
                      : c.displayName || c.name || "Component") +
                    ")"),
              (_.defaultProps = t.defaultProps),
              (_.__emotion_real = _),
              (_.__emotion_base = c),
              (_.__emotion_styles = b),
              (_.__emotion_forwardProp = a),
              Object.defineProperty(_, "toString", {
                value: function() {
                  return "." + i;
                },
              }),
              (_.withComponent = function(t, r) {
                return e(t, void 0 !== r ? g({}, n || {}, {}, r) : n).apply(
                  void 0,
                  b,
                );
              }),
              _
            );
          };
        },
        v = n("Wbzz"),
        y = function() {
          return Object(v.b)("676858514").site.siteMetadata;
        },
        _ = b("button", { target: "e1byoxwz0" })(
          "padding:0.4rem 0.75rem;font-size:0.875rem;cursor:pointer;background:none;border:1px solid ",
          function(e) {
            return e.theme.colors.primary;
          },
          ";color:",
          function(e) {
            return e.theme.colors.primary;
          },
          ";",
        ),
        w = function() {
          var e = y(),
            t = Object(a.i)(),
            n = t[0],
            r = t[1];
          return Object(s.d)(
            a.c,
            null,
            Object(s.d)(a.e.h1, null, e.title),
            Object(s.d)(
              _,
              {
                onClick: function() {
                  r("light" === n ? "dark" : "light");
                },
              },
              "Toggle ",
              "light" === n ? "Dark" : "Light",
            ),
          );
        },
        O = function() {
          var e = y();
          return Object(s.d)(
            a.e.div,
            null,
            e.social.map(function(e) {
              return Object(s.d)(
                a.e.a,
                {
                  key: e.url,
                  href: e.url,
                  target: "_blank",
                  rel: "noopener noreferrer",
                },
                e.name,
              );
            }),
          );
        },
        S = function() {
          var e = y();
          return Object(s.d)(
            a.b,
            null,
            Object(s.d)(
              "p",
              null,
              "© " + new Date().getFullYear() + " " + e.author,
            ),
            Object(s.d)(O, null),
          );
        },
        E = n("Fcif"),
        x = n("5EGp"),
        j = n.n(x);
      function z(e) {
        return (z =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function C(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function k(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function M(e, t) {
        return !t || ("object" !== z(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return e;
            })(e)
          : t;
      }
      function P(e) {
        return (P = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function R(e, t) {
        return (R =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var H = (function(e) {
          function t() {
            return C(this, t), M(this, P(t).apply(this, arguments));
          }
          var n, r, o;
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && R(e, t);
            })(t, e),
            (n = t),
            (r = [
              {
                key: "componentDidMount",
                value: function() {
                  !(function(e, t) {
                    if (!document.head.querySelector("#" + e)) {
                      var n = document.createElement("style");
                      (n.textContent = t),
                        (n.type = "text/css"),
                        (n.id = e),
                        document.head.appendChild(n);
                    }
                  })(this.props.name, this.props.css);
                },
              },
              {
                key: "componentWillUnmount",
                value: function() {
                  var e = document.getElementById(this.props.name);
                  e.parentNode.removeChild(e);
                },
              },
              {
                key: "render",
                value: function() {
                  return null;
                },
              },
            ]) && k(n.prototype, r),
            o && k(n, o),
            t
          );
        })(r.Component),
        L = function(e) {
          var t = e.imageBackgroundColor;
          return "\n  body {\n    overflow: hidden;\n  }\n\n  .__react_modal_image__modal_container {\n    position: fixed;\n    z-index: 5000;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.8);\n    touch-action: none;\n    overflow: hidden;\n  }\n\n  .__react_modal_image__modal_content {\n    position: relative;\n    height: 100%;\n    width: 100%;\n  }\n\n  .__react_modal_image__modal_content img, \n  .__react_modal_image__modal_content svg {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate3d(-50%, -50%, 0);\n    -webkit-transform: translate3d(-50%, -50%, 0);\n    -ms-transform: translate3d(-50%, -50%, 0);\n    overflow: hidden;\n  }\n\n  .__react_modal_image__medium_img {\n    max-width: 98%;\n    max-height: 98%;\n    background-color: "
            .concat(
              t,
              ";\n  }\n\n  .__react_modal_image__large_img {\n    cursor: move;\n    background-color: ",
            )
            .concat(
              t,
              "\n  }\n\n  .__react_modal_image__icon_menu a {\n    display: inline-block;\n    font-size: 40px;\n    cursor: pointer;\n    line-height: 40px;\n    box-sizing: border-box;\n    border: none;\n    padding: 0px 5px 0px 5px;\n    margin-left: 10px;\n    color: white;\n    background-color: rgba(0, 0, 0, 0);\n  }\n\n  .__react_modal_image__icon_menu {\n    display: inline-block;\n    float: right;\n  }\n\n  .__react_modal_image__caption {\n    display: inline-block;\n    color: white;\n    font-size: 120%;\n    padding: 10px;\n    margin: 0;\n  }\n\n  .__react_modal_image__header {\n    position: absolute;\n    top: 0;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.7);\n    overflow: hidden;\n  }\n",
            );
        },
        T = function() {
          return o.a.createElement(
            "svg",
            {
              fill: "#ffffff",
              height: "24",
              viewBox: "0 0 24 24",
              width: "24",
              xmlns: "http://www.w3.org/2000/svg",
            },
            o.a.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
            o.a.createElement("path", {
              d:
                "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z",
            }),
          );
        },
        D = function() {
          return o.a.createElement(
            "svg",
            {
              fill: "#ffffff",
              height: "24",
              viewBox: "0 0 24 24",
              width: "24",
              xmlns: "http://www.w3.org/2000/svg",
            },
            o.a.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
            o.a.createElement("path", {
              d:
                "M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z",
            }),
          );
        },
        V = function() {
          return o.a.createElement(
            "svg",
            {
              fill: "#ffffff",
              height: "24",
              viewBox: "0 0 24 24",
              width: "24",
              xmlns: "http://www.w3.org/2000/svg",
            },
            o.a.createElement("path", {
              d: "M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z",
            }),
            o.a.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
          );
        },
        I = function() {
          return o.a.createElement(
            "svg",
            {
              fill: "#ffffff",
              height: "24",
              viewBox: "0 0 24 24",
              width: "24",
              xmlns: "http://www.w3.org/2000/svg",
            },
            o.a.createElement("path", {
              d:
                "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
            }),
            o.a.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
          );
        },
        N = function() {
          return o.a.createElement(
            "svg",
            {
              fill: "#ffffff",
              height: "48",
              viewBox: "0 0 24 24",
              width: "48",
              xmlns: "http://www.w3.org/2000/svg",
            },
            o.a.createElement("path", {
              d:
                "M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z",
            }),
            o.a.createElement("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
          );
        },
        W = function() {
          return o.a.createElement(
            "svg",
            {
              fill: "#ffffff",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg",
            },
            o.a.createElement("path", {
              fill: "none",
              d: "M0 0h24v24H0V0zm0 0h24v24H0V0z",
            }),
            o.a.createElement("path", {
              d:
                "M7.47 21.49C4.2 19.93 1.86 16.76 1.5 13H0c.51 6.16 5.66 11 11.95 11 .23 0 .44-.02.66-.03L8.8 20.15l-1.33 1.34zM12.05 0c-.23 0-.44.02-.66.04l3.81 3.81 1.33-1.33C19.8 4.07 22.14 7.24 22.5 11H24c-.51-6.16-5.66-11-11.95-11zM16 14h2V8c0-1.11-.9-2-2-2h-6v2h6v6zm-8 2V4H6v2H4v2h2v8c0 1.1.89 2 2 2h8v2h2v-2h2v-2H8z",
            }),
          );
        },
        B = function(e) {
          var t = e.image,
            n = e.alt,
            r = e.zoomed,
            a = e.toggleZoom,
            i = e.toggleRotate,
            l = e.onClose,
            c = e.enableDownload,
            s = e.enableZoom,
            u = e.enableRotate;
          return o.a.createElement(
            "div",
            { className: "__react_modal_image__header" },
            o.a.createElement(
              "span",
              { className: "__react_modal_image__icon_menu" },
              c &&
                o.a.createElement(
                  "a",
                  { href: t, download: !0 },
                  o.a.createElement(V, null),
                ),
              s &&
                o.a.createElement(
                  "a",
                  { onClick: a },
                  r ? o.a.createElement(D, null) : o.a.createElement(T, null),
                ),
              u &&
                o.a.createElement(
                  "a",
                  { onClick: i },
                  o.a.createElement(W, null),
                ),
              o.a.createElement(
                "a",
                { onClick: l },
                o.a.createElement(I, null),
              ),
            ),
            n &&
              o.a.createElement(
                "span",
                { className: "__react_modal_image__caption" },
                n,
              ),
          );
        };
      function F(e) {
        return (F =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function G(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function U(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function q(e, t) {
        return !t || ("object" !== F(t) && "function" != typeof t) ? A(e) : t;
      }
      function Z(e) {
        return (Z = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function A(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return e;
      }
      function J(e, t) {
        return (J =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function K(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var X = (function(e) {
        function t() {
          var e, n;
          G(this, t);
          for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
            o[a] = arguments[a];
          return (
            K(
              A((n = q(this, (e = Z(t)).call.apply(e, [this].concat(o))))),
              "state",
              { loading: !0 },
            ),
            K(A(n), "handleOnLoad", function() {
              n.setState({ loading: !1 });
            }),
            K(A(n), "handleOnContextMenu", function(e) {
              !n.props.contextMenu && e.preventDefault();
            }),
            n
          );
        }
        var n, r, a;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && J(e, t);
          })(t, e),
          (n = t),
          (r = [
            {
              key: "render",
              value: function() {
                var e = this.props,
                  t = e.id,
                  n = e.className,
                  r = e.src,
                  a = e.style,
                  i = e.handleDoubleClick;
                return o.a.createElement(
                  "div",
                  null,
                  this.state.loading && o.a.createElement(N, null),
                  o.a.createElement("img", {
                    id: t,
                    className: n,
                    src: r,
                    style: a,
                    onLoad: this.handleOnLoad,
                    onDoubleClick: i,
                    onContextMenu: this.handleOnContextMenu,
                  }),
                );
              },
            },
          ]) && U(n.prototype, r),
          a && U(n, a),
          t
        );
      })(r.Component);
      function Y(e) {
        return (Y =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function Q(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function $(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function ee(e, t) {
        return !t || ("object" !== Y(t) && "function" != typeof t) ? ne(e) : t;
      }
      function te(e) {
        return (te = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function ne(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return e;
      }
      function re(e, t) {
        return (re =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function oe(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var ae = (function(e) {
        function t() {
          var e, n;
          Q(this, t);
          for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
            o[a] = arguments[a];
          return (
            oe(
              ne((n = ee(this, (e = te(t)).call.apply(e, [this].concat(o))))),
              "state",
              {
                move: { x: 0, y: 0 },
                moveStart: void 0,
                zoomed: !1,
                rotationDeg: 0,
              },
            ),
            oe(ne(n), "handleKeyDown", function(e) {
              (27 !== e.keyCode && 13 !== e.keyCode) || n.props.onClose();
            }),
            oe(ne(n), "getCoordinatesIfOverImg", function(e) {
              var t = e.changedTouches ? e.changedTouches[0] : e;
              if ("react-modal-image-img" === t.target.id) {
                var r = n.contentEl.getBoundingClientRect();
                return { x: t.clientX - r.left, y: t.clientY - r.top };
              }
            }),
            oe(ne(n), "handleMouseDownOrTouchStart", function(e) {
              if ((e.preventDefault(), !(e.touches && e.touches.length > 1))) {
                var t = n.getCoordinatesIfOverImg(e);
                t || n.props.onClose(),
                  n.state.zoomed &&
                    n.setState(function(e) {
                      return {
                        moveStart: { x: t.x - e.move.x, y: t.y - e.move.y },
                      };
                    });
              }
            }),
            oe(ne(n), "handleMouseMoveOrTouchMove", function(e) {
              if (
                (e.preventDefault(),
                n.state.zoomed &&
                  n.state.moveStart &&
                  !(e.touches && e.touches.length > 1))
              ) {
                var t = n.getCoordinatesIfOverImg(e);
                t &&
                  n.setState(function(e) {
                    return {
                      move: { x: t.x - e.moveStart.x, y: t.y - e.moveStart.y },
                    };
                  });
              }
            }),
            oe(ne(n), "handleMouseUpOrTouchEnd", function(e) {
              n.setState({ moveStart: void 0 });
            }),
            oe(ne(n), "toggleZoom", function(e) {
              e.preventDefault(),
                n.setState(function(e) {
                  return {
                    zoomed: !e.zoomed,
                    move: e.zoomed ? { x: 0, y: 0 } : e.move,
                  };
                });
            }),
            oe(ne(n), "toggleRotate", function(e) {
              e.preventDefault(),
                360 !== n.state.rotationDeg
                  ? n.setState(function(e) {
                      return { rotationDeg: (e.rotationDeg += 90) };
                    })
                  : n.setState({ rotationDeg: 90 });
            }),
            n
          );
        }
        var n, r, a;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && re(e, t);
          })(t, e),
          (n = t),
          (r = [
            {
              key: "componentDidMount",
              value: function() {
                document.addEventListener("keydown", this.handleKeyDown, !1);
              },
            },
            {
              key: "componentWillUnmount",
              value: function() {
                document.removeEventListener("keydown", this.handleKeyDown, !1);
              },
            },
            {
              key: "render",
              value: function() {
                var e = this,
                  t = this.props,
                  n = t.medium,
                  r = t.large,
                  a = t.alt,
                  i = t.onClose,
                  l = t.hideDownload,
                  c = t.hideZoom,
                  s = t.showRotate,
                  u = t.imageBackgroundColor,
                  d = void 0 === u ? "black" : u,
                  f = this.state,
                  m = f.move,
                  p = f.zoomed,
                  h = f.rotationDeg;
                return o.a.createElement(
                  "div",
                  null,
                  o.a.createElement(H, {
                    name: "__react_modal_image__lightbox",
                    css: L({ imageBackgroundColor: d }),
                  }),
                  o.a.createElement(
                    "div",
                    { className: "__react_modal_image__modal_container" },
                    o.a.createElement(
                      "div",
                      {
                        className: "__react_modal_image__modal_content",
                        onMouseDown: this.handleMouseDownOrTouchStart,
                        onMouseUp: this.handleMouseUpOrTouchEnd,
                        onMouseMove: this.handleMouseMoveOrTouchMove,
                        onTouchStart: this.handleMouseDownOrTouchStart,
                        onTouchEnd: this.handleMouseUpOrTouchEnd,
                        onTouchMove: this.handleMouseMoveOrTouchMove,
                        ref: function(t) {
                          e.contentEl = t;
                        },
                      },
                      p &&
                        o.a.createElement(X, {
                          id: "react-modal-image-img",
                          className: "__react_modal_image__large_img",
                          src: r || n,
                          style: {
                            transform: "translate3d(-50%, -50%, 0) translate3d("
                              .concat(m.x, "px, ")
                              .concat(m.y, "px, 0) rotate(")
                              .concat(h, "deg)"),
                            WebkitTransform: "translate3d(-50%, -50%, 0) translate3d("
                              .concat(m.x, "px, ")
                              .concat(m.y, "px, 0) rotate(")
                              .concat(h, "deg)"),
                            MsTransform: "translate3d(-50%, -50%, 0) translate3d("
                              .concat(m.x, "px, ")
                              .concat(m.y, "px, 0) rotate(")
                              .concat(h, "deg)"),
                          },
                          handleDoubleClick: this.toggleZoom,
                        }),
                      !p &&
                        o.a.createElement(X, {
                          id: "react-modal-image-img",
                          className: "__react_modal_image__medium_img",
                          src: n || r,
                          handleDoubleClick: this.toggleZoom,
                          contextMenu: !n,
                          style: {
                            transform: "translate3d(-50%, -50%, 0) rotate(".concat(
                              h,
                              "deg)",
                            ),
                            WebkitTransform: "translate3d(-50%, -50%, 0) rotate(".concat(
                              h,
                              "deg)",
                            ),
                            MsTransform: "translate3d(-50%, -50%, 0) rotate(".concat(
                              h,
                              "deg)",
                            ),
                          },
                        }),
                    ),
                    o.a.createElement(B, {
                      image: r || n,
                      alt: a,
                      zoomed: p,
                      toggleZoom: this.toggleZoom,
                      toggleRotate: this.toggleRotate,
                      onClose: i,
                      enableDownload: !l,
                      enableZoom: !c,
                      enableRotate: !!s,
                    }),
                  ),
                );
              },
            },
          ]) && $(n.prototype, r),
          a && $(n, a),
          t
        );
      })(r.Component);
      function ie(e) {
        return (ie =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function le(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function ce(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function se(e, t) {
        return !t || ("object" !== ie(t) && "function" != typeof t) ? de(e) : t;
      }
      function ue(e) {
        return (ue = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function de(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return e;
      }
      function fe(e, t) {
        return (fe =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function me(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      r.Component;
      var pe = b("div", { target: "efmp0t70" })({
        name: "1frgmso",
        styles:
          "display:grid;grid-template-columns:repeat(auto-fit,minmax(16rem,1fr));grid-auto-rows:16rem;grid-gap:0.5rem;@media (min-width:1280px){grid-template-columns:repeat(auto-fit,minmax(24rem,1fr));grid-auto-rows:24rem;}",
      });
      var he = b("div", { target: "e1kpljm70" })({
          name: "fm70c1",
          styles: "position:relative;cursor:pointer;overflow:hidden;",
        }),
        ge = {
          css: {
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            transition: "transform 0.5s, filter 0.25s",
            "&:hover": { transform: "scale(1.1)", filter: "saturate(1.3)" },
          },
        },
        be = function(e) {
          var t = e.imagesData.allFile.nodes,
            n = r.useState(void 0),
            o = n[0],
            i = n[1];
          return Object(a.h)(
            "div",
            null,
            Object(a.h)(
              pe,
              null,
              t.map(function(e, t) {
                return Object(a.h)(
                  he,
                  {
                    key: e.id,
                    onClick: function() {
                      i(t);
                    },
                  },
                  Object(a.h)(
                    j.a,
                    Object(E.a)(
                      { alt: e.name, fluid: e.childImageSharp.fluid },
                      ge,
                    ),
                  ),
                );
              }),
            ),
            void 0 !== o &&
              Object(a.h)(ae, {
                hideDownload: !0,
                large: t[o].publicURL,
                onClose: function() {
                  i(void 0);
                },
              }),
          );
        };
      t.default = function(e) {
        var t = e.data,
          n = y();
        return Object(s.d)(
          a.d,
          null,
          Object(s.d)(w, null),
          Object(s.d)(be, { imagesData: t }),
          n.author && Object(s.d)(S, null),
        );
      };
    },
    OvAC: function(e, t) {
      (e.exports = function(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
  },
]);
//# sourceMappingURL=component---gatsby-theme-gallery-src-pages-index-tsx-874f5c1009a24d563948.js.map
