(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blog"],{

/***/ "./src/routes/blog/index.svelte":
/*!**************************************!*\
  !*** ./src/routes/blog/index.svelte ***!
  \**************************************/
/*! exports provided: default, preload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preload", function() { return preload; });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* src/routes/blog/index.svelte generated by Svelte v3.31.0 */


const file = "src/routes/blog/index.svelte";

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = "svelte-1frg2tf-style";
	style.textContent = "ul.svelte-1frg2tf{margin:0 0 1em 0;line-height:1.5}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguc3ZlbHRlIiwic291cmNlcyI6WyJpbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCIgbGFuZz1cInRzXCI+ZXhwb3J0IGZ1bmN0aW9uIHByZWxvYWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmV0Y2goYGJsb2cuanNvbmApLnRoZW4oKHIpID0+IHIuanNvbigpKS50aGVuKChwb3N0cykgPT4ge1xuICAgICAgICByZXR1cm4geyBwb3N0cyB9O1xuICAgIH0pO1xufVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+ZXhwb3J0IGxldCBwb3N0cztcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cdHVsIHtcblx0XHRtYXJnaW46IDAgMCAxZW0gMDtcblx0XHRsaW5lLWhlaWdodDogMS41O1xuXHR9XG48L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5CbG9nPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxoMT5SZWNlbnQgcG9zdHM8L2gxPlxuXG48dWw+XG5cdHsjZWFjaCBwb3N0cyBhcyBwb3N0fVxuXHRcdDwhLS0gd2UncmUgdXNpbmcgdGhlIG5vbi1zdGFuZGFyZCBgcmVsPXByZWZldGNoYCBhdHRyaWJ1dGUgdG9cblx0XHRcdFx0dGVsbCBTYXBwZXIgdG8gbG9hZCB0aGUgZGF0YSBmb3IgdGhlIHBhZ2UgYXMgc29vbiBhc1xuXHRcdFx0XHR0aGUgdXNlciBob3ZlcnMgb3ZlciB0aGUgbGluayBvciB0YXBzIGl0LCBpbnN0ZWFkIG9mXG5cdFx0XHRcdHdhaXRpbmcgZm9yIHRoZSAnY2xpY2snIGV2ZW50IC0tPlxuXHRcdDxsaT48YSByZWw9XCJwcmVmZXRjaFwiIGhyZWY9XCJibG9nL3twb3N0LnNsdWd9XCI+e3Bvc3QudGl0bGV9PC9hPjwvbGk+XG5cdHsvZWFjaH1cbjwvdWw+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0MsRUFBRSxlQUFDLENBQUMsQUFDSCxNQUFNLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUNqQixXQUFXLENBQUUsR0FBRyxBQUNqQixDQUFDIn0= */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(document.head, style);
}

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	return child_ctx;
}

// (25:1) {#each posts as post}
function create_each_block(ctx) {
	let li;
	let a;
	let t_value = /*post*/ ctx[1].title + "";
	let t;
	let a_href_value;

	const block = {
		c: function create() {
			li = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("li");
			a = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("a");
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t_value);
			this.h();
		},
		l: function claim(nodes) {
			li = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "LI", {});
			var li_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(li);
			a = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(li_nodes, "A", { rel: true, href: true });
			var a_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(a);
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(a_nodes, t_value);
			a_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			li_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a, "rel", "prefetch");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a, "href", a_href_value = "blog/" + /*post*/ ctx[1].slug);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(a, file, 29, 6, 624);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(li, file, 29, 2, 620);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, li, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(li, a);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(a, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*posts*/ 1 && t_value !== (t_value = /*post*/ ctx[1].title + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data_dev"])(t, t_value);

			if (dirty & /*posts*/ 1 && a_href_value !== (a_href_value = "blog/" + /*post*/ ctx[1].slug)) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a, "href", a_href_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(li);
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(25:1) {#each posts as post}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let h1;
	let t1;
	let t2;
	let ul;
	let each_value = /*posts*/ ctx[0];
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_each_argument"])(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h1");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Recent posts");
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			ul = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("ul");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["query_selector_all"])("[data-svelte=\"svelte-hfp9t8\"]", document.head);
			head_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);
			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "H1", {});
			var h1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h1);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h1_nodes, "Recent posts");
			h1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);
			ul = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "UL", { class: true });
			var ul_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(ul_nodes);
			}

			ul_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			document.title = "Blog";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h1, file, 21, 0, 351);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(ul, "class", "svelte-1frg2tf");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(ul, file, 23, 0, 374);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, h1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(h1, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t2, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, ul, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*posts*/ 1) {
				each_value = /*posts*/ ctx[0];
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_each_argument"])(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(ul, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t0);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(h1);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t2);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(ul);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_each"])(each_blocks, detaching);
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

function preload() {
	return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
		return { posts };
	});
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_slots"])("Blog", slots, []);
	let { posts } = $$props;
	const writable_props = ["posts"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Blog> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("posts" in $$props) $$invalidate(0, posts = $$props.posts);
	};

	$$self.$capture_state = () => ({ preload, posts });

	$$self.$inject_state = $$props => {
		if ("posts" in $$props) $$invalidate(0, posts = $$props.posts);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [posts];
}

class Blog extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-1frg2tf-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], { posts: 0 });

		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterComponent", {
			component: this,
			tagName: "Blog",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*posts*/ ctx[0] === undefined && !("posts" in props)) {
			console.warn("<Blog> was created without expected prop 'posts'");
		}
	}

	get posts() {
		throw new Error("<Blog>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set posts(value) {
		throw new Error("<Blog>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Blog);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLy8uL3NyYy9yb3V0ZXMvYmxvZy9pbmRleC5zdmVsdGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBNkJpRCxHQUFJLElBQUMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUhBQXZCLEdBQUksSUFBQyxJQUFJOzs7Ozs7Ozs7OzhEQUFJLEdBQUksSUFBQyxLQUFLOztrRkFBdkIsR0FBSSxJQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQUxyQyxHQUFLOzs7O2dDQUFWLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQUFDLEdBQUs7Ozs7K0JBQVYsTUFBSTs7Ozs7Ozs7Ozs7Ozs7OztvQ0FBSixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBeEI0QyxPQUFPO1FBQy9DLElBQUksQ0FBQyxLQUFLLGNBQWMsSUFBSSxDQUFFLENBQUMsSUFBSyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBRSxLQUFLO1dBQ25ELEtBQUs7Ozs7Ozs7T0FLTyxLQUFLIiwiZmlsZSI6IjAxNzYyNmY0MmRiZWI5NzhmMjUxL2Jsb2cuYmxvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiIGxhbmc9XCJ0c1wiPmV4cG9ydCBmdW5jdGlvbiBwcmVsb2FkKCkge1xuICAgIHJldHVybiB0aGlzLmZldGNoKGBibG9nLmpzb25gKS50aGVuKChyKSA9PiByLmpzb24oKSkudGhlbigocG9zdHMpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgcG9zdHMgfTtcbiAgICB9KTtcbn1cbjwvc2NyaXB0PlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPmV4cG9ydCBsZXQgcG9zdHM7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXHR1bCB7XG5cdFx0bWFyZ2luOiAwIDAgMWVtIDA7XG5cdFx0bGluZS1oZWlnaHQ6IDEuNTtcblx0fVxuPC9zdHlsZT5cblxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+QmxvZzwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48aDE+UmVjZW50IHBvc3RzPC9oMT5cblxuPHVsPlxuXHR7I2VhY2ggcG9zdHMgYXMgcG9zdH1cblx0XHQ8IS0tIHdlJ3JlIHVzaW5nIHRoZSBub24tc3RhbmRhcmQgYHJlbD1wcmVmZXRjaGAgYXR0cmlidXRlIHRvXG5cdFx0XHRcdHRlbGwgU2FwcGVyIHRvIGxvYWQgdGhlIGRhdGEgZm9yIHRoZSBwYWdlIGFzIHNvb24gYXNcblx0XHRcdFx0dGhlIHVzZXIgaG92ZXJzIG92ZXIgdGhlIGxpbmsgb3IgdGFwcyBpdCwgaW5zdGVhZCBvZlxuXHRcdFx0XHR3YWl0aW5nIGZvciB0aGUgJ2NsaWNrJyBldmVudCAtLT5cblx0XHQ8bGk+PGEgcmVsPVwicHJlZmV0Y2hcIiBocmVmPVwiYmxvZy97cG9zdC5zbHVnfVwiPntwb3N0LnRpdGxlfTwvYT48L2xpPlxuXHR7L2VhY2h9XG48L3VsPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==