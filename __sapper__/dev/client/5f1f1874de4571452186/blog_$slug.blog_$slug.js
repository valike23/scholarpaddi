(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blog_$slug"],{

/***/ "./src/routes/blog/[slug].svelte":
/*!***************************************!*\
  !*** ./src/routes/blog/[slug].svelte ***!
  \***************************************/
/*! exports provided: default, preload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preload", function() { return preload; });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* src/routes/blog/[slug].svelte generated by Svelte v3.31.0 */


const file = "src/routes/blog/[slug].svelte";

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = "svelte-emm3f3-style";
	style.textContent = ".content.svelte-emm3f3 h2{font-size:1.4em;font-weight:500}.content.svelte-emm3f3 pre{background-color:#f9f9f9;box-shadow:inset 1px 1px 5px rgba(0, 0, 0, 0.05);padding:0.5em;border-radius:2px;overflow-x:auto}.content.svelte-emm3f3 pre code{background-color:transparent;padding:0}.content.svelte-emm3f3 ul{line-height:1.5}.content.svelte-emm3f3 li{margin:0 0 0.5em 0}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3NsdWddLnN2ZWx0ZSIsInNvdXJjZXMiOlsiW3NsdWddLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIiBsYW5nPVwidHNcIj52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBwcmVsb2FkKHsgcGFyYW1zIH0pIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAvLyB0aGUgYHNsdWdgIHBhcmFtZXRlciBpcyBhdmFpbGFibGUgYmVjYXVzZVxuICAgICAgICAvLyB0aGlzIGZpbGUgaXMgY2FsbGVkIFtzbHVnXS5zdmVsdGVcbiAgICAgICAgY29uc3QgcmVzID0geWllbGQgdGhpcy5mZXRjaChgYmxvZy8ke3BhcmFtcy5zbHVnfS5qc29uYCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB5aWVsZCByZXMuanNvbigpO1xuICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICByZXR1cm4geyBwb3N0OiBkYXRhIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yKHJlcy5zdGF0dXMsIGRhdGEubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbjwvc2NyaXB0PlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPmV4cG9ydCBsZXQgcG9zdDtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cdC8qXG5cdFx0QnkgZGVmYXVsdCwgQ1NTIGlzIGxvY2FsbHkgc2NvcGVkIHRvIHRoZSBjb21wb25lbnQsXG5cdFx0YW5kIGFueSB1bnVzZWQgc3R5bGVzIGFyZSBkZWFkLWNvZGUtZWxpbWluYXRlZC5cblx0XHRJbiB0aGlzIHBhZ2UsIFN2ZWx0ZSBjYW4ndCBrbm93IHdoaWNoIGVsZW1lbnRzIGFyZVxuXHRcdGdvaW5nIHRvIGFwcGVhciBpbnNpZGUgdGhlIHt7e3Bvc3QuaHRtbH19fSBibG9jayxcblx0XHRzbyB3ZSBoYXZlIHRvIHVzZSB0aGUgOmdsb2JhbCguLi4pIG1vZGlmaWVyIHRvIHRhcmdldFxuXHRcdGFsbCBlbGVtZW50cyBpbnNpZGUgLmNvbnRlbnRcblx0Ki9cblx0LmNvbnRlbnQgOmdsb2JhbChoMikge1xuXHRcdGZvbnQtc2l6ZTogMS40ZW07XG5cdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0fVxuXG5cdC5jb250ZW50IDpnbG9iYWwocHJlKSB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcblx0XHRib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuXHRcdHBhZGRpbmc6IDAuNWVtO1xuXHRcdGJvcmRlci1yYWRpdXM6IDJweDtcblx0XHRvdmVyZmxvdy14OiBhdXRvO1xuXHR9XG5cblx0LmNvbnRlbnQgOmdsb2JhbChwcmUpIDpnbG9iYWwoY29kZSkge1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHRcdHBhZGRpbmc6IDA7XG5cdH1cblxuXHQuY29udGVudCA6Z2xvYmFsKHVsKSB7XG5cdFx0bGluZS1oZWlnaHQ6IDEuNTtcblx0fVxuXG5cdC5jb250ZW50IDpnbG9iYWwobGkpIHtcblx0XHRtYXJnaW46IDAgMCAwLjVlbSAwO1xuXHR9XG48L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT57cG9zdC50aXRsZX08L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPGgxPntwb3N0LnRpdGxlfTwvaDE+XG5cbjxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG5cdHtAaHRtbCBwb3N0Lmh0bWx9XG48L2Rpdj5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ0Msc0JBQVEsQ0FBQyxBQUFRLEVBQUUsQUFBRSxDQUFDLEFBQ3JCLFNBQVMsQ0FBRSxLQUFLLENBQ2hCLFdBQVcsQ0FBRSxHQUFHLEFBQ2pCLENBQUMsQUFFRCxzQkFBUSxDQUFDLEFBQVEsR0FBRyxBQUFFLENBQUMsQUFDdEIsZ0JBQWdCLENBQUUsT0FBTyxDQUN6QixVQUFVLENBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQ2pELE9BQU8sQ0FBRSxLQUFLLENBQ2QsYUFBYSxDQUFFLEdBQUcsQ0FDbEIsVUFBVSxDQUFFLElBQUksQUFDakIsQ0FBQyxBQUVELHNCQUFRLENBQUMsQUFBUSxHQUFHLEFBQUMsQ0FBQyxBQUFRLElBQUksQUFBRSxDQUFDLEFBQ3BDLGdCQUFnQixDQUFFLFdBQVcsQ0FDN0IsT0FBTyxDQUFFLENBQUMsQUFDWCxDQUFDLEFBRUQsc0JBQVEsQ0FBQyxBQUFRLEVBQUUsQUFBRSxDQUFDLEFBQ3JCLFdBQVcsQ0FBRSxHQUFHLEFBQ2pCLENBQUMsQUFFRCxzQkFBUSxDQUFDLEFBQVEsRUFBRSxBQUFFLENBQUMsQUFDckIsTUFBTSxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQUFDcEIsQ0FBQyJ9 */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(document.head, style);
}

function create_fragment(ctx) {
	let title_value;
	let t0;
	let h1;
	let t1_value = /*post*/ ctx[0].title + "";
	let t1;
	let t2;
	let div;
	let raw_value = /*post*/ ctx[0].html + "";
	document.title = title_value = /*post*/ ctx[0].title;

	const block = {
		c: function create() {
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h1");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t1_value);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["query_selector_all"])("[data-svelte=\"svelte-1uty71u\"]", document.head);
			head_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);
			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "H1", {});
			var h1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h1);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h1_nodes, t1_value);
			h1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "DIV", { class: true });
			var div_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div);
			div_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h1, file, 68, 0, 2044);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div, "class", "content svelte-emm3f3");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div, file, 70, 0, 2067);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, h1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(h1, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t2, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, div, anchor);
			div.innerHTML = raw_value;
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*post*/ 1 && title_value !== (title_value = /*post*/ ctx[0].title)) {
				document.title = title_value;
			}

			if (dirty & /*post*/ 1 && t1_value !== (t1_value = /*post*/ ctx[0].title + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data_dev"])(t1, t1_value);
			if (dirty & /*post*/ 1 && raw_value !== (raw_value = /*post*/ ctx[0].html + "")) div.innerHTML = raw_value;;
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t0);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(h1);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t2);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(div);
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
	function adopt(value) {
		return value instanceof P
		? value
		: new P(function (resolve) {
					resolve(value);
				});
	}

	return new (P || (P = Promise))(function (resolve, reject) {
			function fulfilled(value) {
				try {
					step(generator.next(value));
				} catch(e) {
					reject(e);
				}
			}

			function rejected(value) {
				try {
					step(generator["throw"](value));
				} catch(e) {
					reject(e);
				}
			}

			function step(result) {
				result.done
				? resolve(result.value)
				: adopt(result.value).then(fulfilled, rejected);
			}

			step((generator = generator.apply(thisArg, _arguments || [])).next());
		});
};

function preload({ params }) {
	return __awaiter(this, void 0, void 0, function* () {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = yield this.fetch(`blog/${params.slug}.json`);

		const data = yield res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	});
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_slots"])("U5Bslugu5D", slots, []);
	let { post } = $$props;
	const writable_props = ["post"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<U5Bslugu5D> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("post" in $$props) $$invalidate(0, post = $$props.post);
	};

	$$self.$capture_state = () => ({ __awaiter, preload, post });

	$$self.$inject_state = $$props => {
		if ("post" in $$props) $$invalidate(0, post = $$props.post);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [post];
}

class U5Bslugu5D extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-emm3f3-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], { post: 0 });

		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Bslugu5D",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*post*/ ctx[0] === undefined && !("post" in props)) {
			console.warn("<U5Bslugu5D> was created without expected prop 'post'");
		}
	}

	get post() {
		throw new Error("<U5Bslugu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set post(value) {
		throw new Error("<U5Bslugu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* harmony default export */ __webpack_exports__["default"] = (U5Bslugu5D);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLy8vLy8vLy8vLy8vLy8vLy4vc3JjL3JvdXRlcy9ibG9nL1tzbHVnXS5zdmVsdGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eUJBb0VLLEdBQUksSUFBQyxLQUFLOzs7OzBCQUdQLEdBQUksSUFBQyxJQUFJO3lDQU5SLEdBQUksSUFBQyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUVBQVYsR0FBSSxJQUFDLEtBQUs7Ozs7K0RBR2QsR0FBSSxJQUFDLEtBQUs7aUVBR1AsR0FBSSxJQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBdkVzQixTQUFTLEdBQUksU0FBSSxJQUFJLFNBQUksQ0FBQyxTQUFTLGNBQWUsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsU0FBUztVQUM3RyxLQUFLLENBQUMsS0FBSztTQUFXLEtBQUssWUFBWSxDQUFDO0lBQUcsS0FBSztRQUFPLENBQUMsV0FBVyxPQUFPO0tBQUksT0FBTyxDQUFDLEtBQUs7Ozs7YUFDeEYsQ0FBQyxLQUFLLENBQUMsR0FBRyxPQUFPLGFBQWEsT0FBTyxFQUFFLE1BQU07WUFDNUMsU0FBUyxDQUFDLEtBQUs7O0tBQVUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSztZQUFhLENBQUM7S0FBSSxNQUFNLENBQUMsQ0FBQzs7OztZQUM1RSxRQUFRLENBQUMsS0FBSzs7S0FBVSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxLQUFLO1lBQWEsQ0FBQztLQUFJLE1BQU0sQ0FBQyxDQUFDOzs7O1lBQy9FLElBQUksQ0FBQyxNQUFNO0lBQUksTUFBTSxDQUFDLElBQUk7TUFBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUs7TUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVE7OztHQUMxRyxJQUFJLEVBQUUsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFVBQVUsU0FBUyxJQUFJOzs7O1NBRzFELE9BQU8sR0FBRyxNQUFNO1FBQ3JCLFNBQVMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUM7OztRQUczQixHQUFHLFNBQVMsSUFBSSxDQUFDLEtBQUssU0FBUyxNQUFNLENBQUMsSUFBSTs7UUFDMUMsSUFBSSxTQUFTLEdBQUcsQ0FBQyxJQUFJOztNQUN2QixHQUFHLENBQUMsTUFBTSxLQUFLLEdBQUc7WUFDVCxJQUFJLEVBQUUsSUFBSTs7R0FHbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPOzs7Ozs7OztPQU1sQixJQUFJIiwiZmlsZSI6IjVmMWYxODc0ZGU0NTcxNDUyMTg2L2Jsb2dfJHNsdWcuYmxvZ18kc2x1Zy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiIGxhbmc9XCJ0c1wiPnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIHByZWxvYWQoeyBwYXJhbXMgfSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIC8vIHRoZSBgc2x1Z2AgcGFyYW1ldGVyIGlzIGF2YWlsYWJsZSBiZWNhdXNlXG4gICAgICAgIC8vIHRoaXMgZmlsZSBpcyBjYWxsZWQgW3NsdWddLnN2ZWx0ZVxuICAgICAgICBjb25zdCByZXMgPSB5aWVsZCB0aGlzLmZldGNoKGBibG9nLyR7cGFyYW1zLnNsdWd9Lmpzb25gKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IHlpZWxkIHJlcy5qc29uKCk7XG4gICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIHJldHVybiB7IHBvc3Q6IGRhdGEgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IocmVzLnN0YXR1cywgZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+ZXhwb3J0IGxldCBwb3N0O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblx0Lypcblx0XHRCeSBkZWZhdWx0LCBDU1MgaXMgbG9jYWxseSBzY29wZWQgdG8gdGhlIGNvbXBvbmVudCxcblx0XHRhbmQgYW55IHVudXNlZCBzdHlsZXMgYXJlIGRlYWQtY29kZS1lbGltaW5hdGVkLlxuXHRcdEluIHRoaXMgcGFnZSwgU3ZlbHRlIGNhbid0IGtub3cgd2hpY2ggZWxlbWVudHMgYXJlXG5cdFx0Z29pbmcgdG8gYXBwZWFyIGluc2lkZSB0aGUge3t7cG9zdC5odG1sfX19IGJsb2NrLFxuXHRcdHNvIHdlIGhhdmUgdG8gdXNlIHRoZSA6Z2xvYmFsKC4uLikgbW9kaWZpZXIgdG8gdGFyZ2V0XG5cdFx0YWxsIGVsZW1lbnRzIGluc2lkZSAuY29udGVudFxuXHQqL1xuXHQuY29udGVudCA6Z2xvYmFsKGgyKSB7XG5cdFx0Zm9udC1zaXplOiAxLjRlbTtcblx0XHRmb250LXdlaWdodDogNTAwO1xuXHR9XG5cblx0LmNvbnRlbnQgOmdsb2JhbChwcmUpIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuXHRcdGJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG5cdFx0cGFkZGluZzogMC41ZW07XG5cdFx0Ym9yZGVyLXJhZGl1czogMnB4O1xuXHRcdG92ZXJmbG93LXg6IGF1dG87XG5cdH1cblxuXHQuY29udGVudCA6Z2xvYmFsKHByZSkgOmdsb2JhbChjb2RlKSB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cdFx0cGFkZGluZzogMDtcblx0fVxuXG5cdC5jb250ZW50IDpnbG9iYWwodWwpIHtcblx0XHRsaW5lLWhlaWdodDogMS41O1xuXHR9XG5cblx0LmNvbnRlbnQgOmdsb2JhbChsaSkge1xuXHRcdG1hcmdpbjogMCAwIDAuNWVtIDA7XG5cdH1cbjwvc3R5bGU+XG5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPntwb3N0LnRpdGxlfTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48aDE+e3Bvc3QudGl0bGV9PC9oMT5cblxuPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cblx0e0BodG1sIHBvc3QuaHRtbH1cbjwvZGl2PlxuIl0sInNvdXJjZVJvb3QiOiIifQ==