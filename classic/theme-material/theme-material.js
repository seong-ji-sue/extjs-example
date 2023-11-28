Ext.define(
	'Ext.theme.neptune.Component',
	{
		override: 'Ext.Component',
		initComponent: function () {
			this.callParent();
			if (this.dock && this.border === undefined) {
				this.border = !1;
			}
		},
		privates: {
			initStyles: function () {
				var a = this,
					b = a.hasOwnProperty('border'),
					c = a.border;
				if (a.dock) {
					a.border = null;
				}
				a.callParent(arguments);
				if (b) {
					a.border = c;
				} else {
					delete a.border;
				}
			},
		},
	},
	function () {
		Ext.namespace('Ext.theme.is').Neptune = !0;
		Ext.theme.name = 'Neptune';
	},
);
Ext.define(
	'Ext.theme.triton.Component',
	{ override: 'Ext.Component' },
	function () {
		Ext.namespace('Ext.theme.is').Triton = !0;
		Ext.theme.name = 'Triton';
	},
);
Ext.define(
	'Ext.theme.material.Component',
	{
		override: 'Ext.Component',
		config: { ripple: null, labelAlign: 'top' },
		initComponent: function () {
			var a = this;
			a.callParent();
			if (a.ripple) {
				a.on(
					'afterrender',
					function () {
						a.updateRipple(a.getRipple());
					},
					a,
				);
			}
		},
		updateRipple: function (c) {
			var b = this,
				a = b.el;
			if (Ext.isIE9m) {
				Ext.log(
					{ level: 'warn' },
					'Ripple effect is not supported in IE9 and below!',
				);
				return;
			}
			if (a) {
				a.un('touchstart', 'onRippleStart', b);
				a.un('touchend', 'onRippleStart', b);
				a.destroyAllRipples();
				a.on(c.release ? 'touchend' : 'touchstart', 'onRippleStart', b);
			}
		},
		shouldRipple: function (e) {
			var a = this,
				f = a.getDisabled && a.getDisabled(),
				d = a.el,
				c = !f && a.getRipple(),
				b;
			if (c && e) {
				b = e.getTarget(a.noRippleSelector);
				if (b) {
					if (d.dom === b || d.contains(b)) {
						c = null;
					}
				}
			}
			return c;
		},
		onRippleStart: function (a) {
			var c = this,
				b = this.shouldRipple(a);
			if (a.button === 0 && b) {
				c.el.ripple(a, b);
			}
		},
		privates: {
			noRippleSelector: '.' + Ext.baseCSSPrefix + 'no-ripple',
			whenVisible: function (e, c) {
				var a = this,
					f,
					b,
					d;
				c = c || Ext.emptyArray;
				f = a.visibleListener;
				b = a.pendingVisible;
				d = a.isVisible(!0);
				if (!d && !f) {
					a.visibleListener = Ext.on({
						scope: a,
						show: 'handleGlobalShow',
						destroyable: !0,
					});
				}
				if (d) {
					if (b) {
						b[e] = c;
						a.runWhenVisible();
					} else {
						a[e].apply(a, c);
					}
				} else {
					if (!b) {
						a.pendingVisible = b = {};
					}
					b[e] = c;
				}
				return d;
			},
			clearWhenVisible: function (c) {
				var a = this,
					b = a.pendingVisible;
				if (b) {
					delete b[c];
					if (Ext.Object.isEmpty(b)) {
						a.pendingVisible = null;
						a.visibleListener = Ext.destroy(a.visibleListener);
					}
				}
			},
			runWhenVisible: function () {
				var a = this,
					c = a.pendingVisible,
					b;
				a.pendingVisible = null;
				a.visibleListener = Ext.destroy(a.visibleListener);
				for (b in c) {
					a[b].apply(a, c[b]);
				}
			},
			handleGlobalShow: function (b) {
				var a = this;
				if (a.isVisible(!0) && (b === a || a.isDescendantOf(b))) {
					a.runWhenVisible();
				}
			},
		},
	},
	function () {
		Ext.namespace('Ext.theme.is').Material = !0;
		Ext.theme.name = 'Material';
	},
);
Ext.define('Ext.theme.triton.list.TreeItem', {
	override: 'Ext.list.TreeItem',
	compatibility: Ext.isIE8,
	setFloated: function (b, a) {
		this.callParent([b, a]);
		this.toolElement.syncRepaint();
	},
});
Ext.define('Ext.theme.material.button.Button', {
	override: 'Ext.button.Button',
	ripple: { color: 'default' },
});
Ext.define('Ext.theme.material.button.Split', {
	override: 'Ext.button.Split',
	separateArrowStyling: !0,
	ripple: !1,
});
Ext.define('Ext.theme.neptune.resizer.Splitter', {
	override: 'Ext.resizer.Splitter',
	size: 8,
});
Ext.define('Ext.theme.triton.resizer.Splitter', {
	override: 'Ext.resizer.Splitter',
	size: 10,
});
Ext.define('Ext.theme.neptune.toolbar.Toolbar', {
	override: 'Ext.toolbar.Toolbar',
	usePlainButtons: !1,
	border: !1,
});
Ext.define('Ext.theme.neptune.layout.component.Dock', {
	override: 'Ext.layout.component.Dock',
	noBorderClassTable: [
		0,
		Ext.baseCSSPrefix + 'noborder-l',
		Ext.baseCSSPrefix + 'noborder-b',
		Ext.baseCSSPrefix + 'noborder-bl',
		Ext.baseCSSPrefix + 'noborder-r',
		Ext.baseCSSPrefix + 'noborder-rl',
		Ext.baseCSSPrefix + 'noborder-rb',
		Ext.baseCSSPrefix + 'noborder-rbl',
		Ext.baseCSSPrefix + 'noborder-t',
		Ext.baseCSSPrefix + 'noborder-tl',
		Ext.baseCSSPrefix + 'noborder-tb',
		Ext.baseCSSPrefix + 'noborder-tbl',
		Ext.baseCSSPrefix + 'noborder-tr',
		Ext.baseCSSPrefix + 'noborder-trl',
		Ext.baseCSSPrefix + 'noborder-trb',
		Ext.baseCSSPrefix + 'noborder-trbl',
	],
	edgeMasks: { top: 8, right: 4, bottom: 2, left: 1 },
	handleItemBorders: function () {
		var d = this,
			i = 0,
			o = 8,
			n = 4,
			l = 2,
			m = 1,
			r = d.owner,
			s = r.bodyBorder,
			j = r.border,
			x = d.collapsed,
			y = d.edgeMasks,
			k = d.noBorderClassTable,
			v = r.dockedItems.generation,
			a,
			q,
			u,
			b,
			t,
			w,
			g,
			p,
			h,
			c,
			f,
			e;
		if (d.initializedBorders === v) {
			return;
		}
		f = [];
		e = [];
		q = d.getBorderCollapseTable();
		k = d.getBorderClassTable ? d.getBorderClassTable() : k;
		d.initializedBorders = v;
		d.collapsed = !1;
		u = d.getDockedItems('visual');
		d.collapsed = x;
		for (t = 0, w = u.length; t < w; t++) {
			g = u[t];
			if (g.ignoreBorderManagement) {
				continue;
			}
			p = g.dock;
			c = b = 0;
			f.length = 0;
			e.length = 0;
			if (p !== 'bottom') {
				if (i & o) {
					a = g.border;
				} else {
					a = j;
					if (a !== !1) {
						b += o;
					}
				}
				if (a === !1) {
					c += o;
				}
			}
			if (p !== 'left') {
				if (i & n) {
					a = g.border;
				} else {
					a = j;
					if (a !== !1) {
						b += n;
					}
				}
				if (a === !1) {
					c += n;
				}
			}
			if (p !== 'top') {
				if (i & l) {
					a = g.border;
				} else {
					a = j;
					if (a !== !1) {
						b += l;
					}
				}
				if (a === !1) {
					c += l;
				}
			}
			if (p !== 'right') {
				if (i & m) {
					a = g.border;
				} else {
					a = j;
					if (a !== !1) {
						b += m;
					}
				}
				if (a === !1) {
					c += m;
				}
			}
			if ((h = g.lastBorderMask) !== c) {
				g.lastBorderMask = c;
				if (h) {
					e[0] = k[h];
				}
				if (c) {
					f[0] = k[c];
				}
			}
			if ((h = g.lastBorderCollapse) !== b) {
				g.lastBorderCollapse = b;
				if (h) {
					e[e.length] = q[h];
				}
				if (b) {
					f[f.length] = q[b];
				}
			}
			if (e.length) {
				g.removeCls(e);
			}
			if (f.length) {
				g.addCls(f);
			}
			i |= y[p];
		}
		c = b = 0;
		f.length = 0;
		e.length = 0;
		if (i & o) {
			a = s;
		} else {
			a = j;
			if (a !== !1) {
				b += o;
			}
		}
		if (a === !1) {
			c += o;
		}
		if (i & n) {
			a = s;
		} else {
			a = j;
			if (a !== !1) {
				b += n;
			}
		}
		if (a === !1) {
			c += n;
		}
		if (i & l) {
			a = s;
		} else {
			a = j;
			if (a !== !1) {
				b += l;
			}
		}
		if (a === !1) {
			c += l;
		}
		if (i & m) {
			a = s;
		} else {
			a = j;
			if (a !== !1) {
				b += m;
			}
		}
		if (a === !1) {
			c += m;
		}
		if ((h = d.lastBodyBorderMask) !== c) {
			d.lastBodyBorderMask = c;
			if (h) {
				e[0] = k[h];
			}
			if (c) {
				f[0] = k[c];
			}
		}
		if ((h = d.lastBodyBorderCollapse) !== b) {
			d.lastBodyBorderCollapse = b;
			if (h) {
				e[e.length] = q[h];
			}
			if (b) {
				f[f.length] = q[b];
			}
		}
		if (e.length) {
			r.removeBodyCls(e);
		}
		if (f.length) {
			r.addBodyCls(f);
		}
	},
	onRemove: function (a) {
		var b = this,
			d = a.lastBorderMask,
			c = a.lastBorderCollapse;
		if (!a.destroyed && !a.ignoreBorderManagement) {
			if (d) {
				a.lastBorderMask = 0;
				a.removeCls(b.noBorderClassTable[d]);
			}
			if (c) {
				a.lastBorderCollapse = 0;
				a.removeCls(b.getBorderCollapseTable()[c]);
			}
		}
		b.callParent([a]);
	},
});
Ext.define('Ext.theme.neptune.panel.Panel', {
	override: 'Ext.panel.Panel',
	border: !1,
	bodyBorder: !1,
	initBorderProps: Ext.emptyFn,
	initBodyBorder: function () {
		if (this.bodyBorder !== !0) {
			this.callParent();
		}
	},
});
Ext.define('Ext.theme.neptune.container.ButtonGroup', {
	override: 'Ext.container.ButtonGroup',
	usePlainButtons: !1,
});
Ext.define('Ext.theme.material.form.field.Text', {
	override: 'Ext.form.field.Text',
	labelSeparator: '',
	listeners: {
		change: function (a, b) {
			if (a.el) {
				a.el.toggleCls('not-empty', b || a.emptyText);
			}
		},
		render: function (a, d, b, c) {
			if ((a.getValue() || a.emptyText) && a.el) {
				a.el.addCls('not-empty');
			}
		},
	},
});
Ext.define('Ext.theme.material.window.MessageBox', {
	override: 'Ext.window.MessageBox',
	buttonAlign: 'right',
});
Ext.define('Ext.theme.triton.form.field.Checkbox', {
	override: 'Ext.form.field.Checkbox',
	compatibility: Ext.isIE8,
	initComponent: function () {
		this.callParent();
		Ext.on({ show: 'onGlobalShow', scope: this });
	},
	onFocus: function (b) {
		var a;
		this.callParent([b]);
		a = this.getFocusClsEl();
		if (a) {
			a.syncRepaint();
		}
	},
	onBlur: function (b) {
		var a;
		this.callParent([b]);
		a = this.getFocusClsEl();
		if (a) {
			a.syncRepaint();
		}
	},
	onGlobalShow: function (a) {
		if (a.isAncestor(this)) {
			this.getFocusClsEl().syncRepaint();
		}
	},
});
Ext.define('Ext.theme.material.form.field.Checkbox', {
	override: 'Ext.form.field.Checkbox',
	ripple: { delegate: '.' + Ext.baseCSSPrefix + 'form-checkbox', bound: !1 },
});
Ext.define('Ext.theme.material.form.field.Radio', {
	override: 'Ext.form.field.Radio',
	ripple: { delegate: '.' + Ext.baseCSSPrefix + 'form-radio', bound: !1 },
});
Ext.define('Ext.theme.neptune.toolbar.Paging', {
	override: 'Ext.toolbar.Paging',
	defaultButtonUI: 'plain-toolbar',
	inputItemWidth: 40,
});
Ext.define('Ext.theme.triton.toolbar.Paging', {
	override: 'Ext.toolbar.Paging',
	inputItemWidth: 50,
});
Ext.define('Ext.theme.neptune.picker.Month', {
	override: 'Ext.picker.Month',
	measureMaxHeight: 36,
});
Ext.define('Ext.theme.triton.picker.Month', {
	override: 'Ext.picker.Month',
	footerButtonUI: 'default-toolbar',
	calculateMonthMargin: Ext.emptyFn,
});
Ext.define('Ext.theme.triton.picker.Date', {
	override: 'Ext.picker.Date',
	footerButtonUI: 'default-toolbar',
});
Ext.define('Ext.theme.neptune.form.field.HtmlEditor', {
	override: 'Ext.form.field.HtmlEditor',
	defaultButtonUI: 'plain-toolbar',
});
Ext.define('Ext.theme.material.form.field.Tag', {
	override: 'Ext.form.field.Tag',
	labelSeparator: '',
	listeners: {
		change: function (a, b) {
			if (a.el) {
				a.el.toggleCls('not-empty', b.length);
			}
		},
		render: function (a, d, b, c) {
			if (a.getValue() && a.el) {
				a.el.addCls('not-empty');
			}
		},
	},
});
Ext.define('Ext.theme.neptune.panel.Table', {
	override: 'Ext.panel.Table',
	lockableBodyBorder: !0,
	initComponent: function () {
		var a = this;
		a.callParent();
		if (
			!a.hasOwnProperty('bodyBorder') &&
			!a.hideHeaders &&
			(a.lockableBodyBorder || !a.lockable)
		) {
			a.bodyBorder = !0;
		}
	},
});
Ext.define('Ext.theme.material.view.Table', {
	override: 'Ext.view.Table',
	mixins: ['Ext.mixin.ItemRippler'],
	config: { itemRipple: { color: 'default' } },
	processItemEvent: function (i, j, h, b) {
		var a = this,
			c,
			g,
			e,
			d,
			f;
		g = a.callParent([i, j, h, b]);
		if (b.type === 'mousedown') {
			c = a.eventPosition;
			e = c && a.eventPosition.rowElement;
			d = c && a.eventPosition.cellElement;
			f = a.getSelectionModel().type;
			if (e && f === 'rowmodel') {
				a.rippleItem(Ext.fly(e), b);
			} else if (d && f === 'cellmodel') {
				a.rippleItem(Ext.fly(d), b);
			}
		}
		return g;
	},
});
Ext.define('Ext.theme.neptune.grid.RowEditor', {
	override: 'Ext.grid.RowEditor',
	buttonUI: 'default-toolbar',
});
Ext.define('Ext.theme.triton.grid.column.Column', {
	override: 'Ext.grid.column.Column',
	compatibility: Ext.isIE8,
	onTitleMouseOver: function () {
		var a = this.triggerEl;
		this.callParent(arguments);
		if (a) {
			a.syncRepaint();
		}
	},
});
Ext.define('Ext.theme.triton.grid.column.Check', {
	override: 'Ext.grid.column.Check',
	compatibility: Ext.isIE8,
	setRecordCheck: function (c, d, b, a) {
		this.callParent(arguments);
		Ext.fly(a).syncRepaint();
	},
});
Ext.define('Ext.theme.neptune.grid.column.RowNumberer', {
	override: 'Ext.grid.column.RowNumberer',
	width: 25,
});
Ext.define('Ext.theme.triton.grid.column.RowNumberer', {
	override: 'Ext.grid.column.RowNumberer',
	width: 32,
});
Ext.define('Ext.theme.triton.menu.Item', {
	override: 'Ext.menu.Item',
	compatibility: Ext.isIE8,
	onFocus: function (a) {
		this.callParent([a]);
		this.repaintIcons();
	},
	onFocusLeave: function (a) {
		this.callParent([a]);
		this.repaintIcons();
	},
	privates: {
		repaintIcons: function () {
			var c = this.iconEl,
				a = this.arrowEl,
				b = this.checkEl;
			if (c) {
				c.syncRepaint();
			}
			if (a) {
				a.syncRepaint();
			}
			if (b) {
				b.syncRepaint();
			}
		},
	},
});
Ext.define('Ext.theme.neptune.menu.Separator', {
	override: 'Ext.menu.Separator',
	border: !0,
});
Ext.define('Ext.theme.neptune.menu.Menu', {
	override: 'Ext.menu.Menu',
	showSeparator: !1,
});
Ext.define('Ext.theme.triton.menu.Menu', {
	override: 'Ext.menu.Menu',
	compatibility: Ext.isIE8,
	afterShow: function () {
		var e = this,
			c,
			a,
			b,
			d;
		e.callParent(arguments);
		c = e.items.getRange();
		for (b = 0, d = c.length; b < d; b++) {
			a = c[b];
			if (a && a.repaintIcons) {
				a.repaintIcons();
			}
		}
	},
});
Ext.define('Ext.theme.material.menu.Menu', {
	override: 'Ext.menu.Menu',
	ripple: { color: 'default' },
});
Ext.define('Ext.theme.triton.grid.plugin.RowExpander', {
	override: 'Ext.grid.plugin.RowExpander',
	headerWidth: 32,
});
Ext.define('Ext.theme.triton.grid.selection.SpreadsheetModel', {
	override: 'Ext.grid.selection.SpreadsheetModel',
	checkboxHeaderWidth: 32,
});
Ext.define('Ext.theme.triton.selection.CheckboxModel', {
	override: 'Ext.selection.CheckboxModel',
	headerWidth: 32,
	onHeaderClick: function (b, a, c) {
		this.callParent([b, a, c]);
		if (Ext.isIE8) {
			a.getView().ownerGrid.el.syncRepaint();
		}
	},
});
Ext.define('Ext.theme.material.tab.Tab', {
	override: 'Ext.tab.Tab',
	ripple: { color: 'default' },
});
Ext.define('Ext.theme.material.tree.View', {
	override: 'Ext.tree.View',
	config: { color: 'default' },
});
Ext.define('Ext.theme.Material', {
	singleton: !0,
	_autoUpdateMeta: !0,
	_defaultWeight: '500',
	_colors: {
		red: {
			50: '#ffebee',
			100: '#ffcdd2',
			200: '#ef9a9a',
			300: '#e57373',
			400: '#ef5350',
			500: '#f44336',
			600: '#e53935',
			700: '#d32f2f',
			800: '#c62828',
			900: '#b71c1c',
			a100: '#ff8a80',
			a200: '#ff5252',
			a400: '#ff1744',
			a700: '#d50000',
		},
		pink: {
			50: '#fce4ec',
			100: '#f8bbd0',
			200: '#f48fb1',
			300: '#f06292',
			400: '#ec407a',
			500: '#e91e63',
			600: '#d81b60',
			700: '#c2185b',
			800: '#ad1457',
			900: '#880e4f',
			a100: '#ff80ab',
			a200: '#ff4081',
			a400: '#f50057',
			a700: '#c51162',
		},
		purple: {
			50: '#f3e5f5',
			100: '#e1bee7',
			200: '#ce93d8',
			300: '#ba68c8',
			400: '#ab47bc',
			500: '#9c27b0',
			600: '#8e24aa',
			700: '#7b1fa2',
			800: '#6a1b9a',
			900: '#4a148c',
			a100: '#ea80fc',
			a200: '#e040fb',
			a400: '#d500f9',
			a700: '#aa00ff',
		},
		'deep-purple': {
			50: '#ede7f6',
			100: '#d1c4e9',
			200: '#b39ddb',
			300: '#9575cd',
			400: '#7e57c2',
			500: '#673ab7',
			600: '#5e35b1',
			700: '#512da8',
			800: '#4527a0',
			900: '#311b92',
			a100: '#b388ff',
			a200: '#7c4dff',
			a400: '#651fff',
			a700: '#6200ea',
		},
		indigo: {
			50: '#e8eaf6',
			100: '#c5cae9',
			200: '#9fa8da',
			300: '#7986cb',
			400: '#5c6bc0',
			500: '#3f51b5',
			600: '#3949ab',
			700: '#303f9f',
			800: '#283593',
			900: '#1a237e',
			a100: '#8c9eff',
			a200: '#536dfe',
			a400: '#3d5afe',
			a700: '#304ffe',
		},
		blue: {
			50: '#e3f2fd',
			100: '#bbdefb',
			200: '#90caf9',
			300: '#64b5f6',
			400: '#42a5f5',
			500: '#2196f3',
			600: '#1e88e5',
			700: '#1976d2',
			800: '#1565c0',
			900: '#0d47a1',
			a100: '#82b1ff',
			a200: '#448aff',
			a400: '#2979ff',
			a700: '#2962ff',
		},
		'light-blue': {
			50: '#e1f5fe',
			100: '#b3e5fc',
			200: '#81d4fa',
			300: '#4fc3f7',
			400: '#29b6f6',
			500: '#03a9f4',
			600: '#039be5',
			700: '#0288d1',
			800: '#0277bd',
			900: '#01579b',
			a100: '#80d8ff',
			a200: '#40c4ff',
			a400: '#00b0ff',
			a700: '#0091ea',
		},
		cyan: {
			50: '#e0f7fa',
			100: '#b2ebf2',
			200: '#80deea',
			300: '#4dd0e1',
			400: '#26c6da',
			500: '#00bcd4',
			600: '#00acc1',
			700: '#0097a7',
			800: '#00838f',
			900: '#006064',
			a100: '#84ffff',
			a200: '#18ffff',
			a400: '#00e5ff',
			a700: '#00b8d4',
		},
		teal: {
			50: '#e0f2f1',
			100: '#b2dfdb',
			200: '#80cbc4',
			300: '#4db6ac',
			400: '#26a69a',
			500: '#009688',
			600: '#00897b',
			700: '#00796b',
			800: '#00695c',
			900: '#004d40',
			a100: '#a7ffeb',
			a200: '#64ffda',
			a400: '#1de9b6',
			a700: '#00bfa5',
		},
		green: {
			50: '#e8f5e9',
			100: '#c8e6c9',
			200: '#a5d6a7',
			300: '#81c784',
			400: '#66bb6a',
			500: '#4caf50',
			600: '#43a047',
			700: '#388e3c',
			800: '#2e7d32',
			900: '#1b5e20',
			a100: '#b9f6ca',
			a200: '#69f0ae',
			a400: '#00e676',
			a700: '#00c853',
		},
		'light-green': {
			50: '#f1f8e9',
			100: '#dcedc8',
			200: '#c5e1a5',
			300: '#aed581',
			400: '#9ccc65',
			500: '#8bc34a',
			600: '#7cb342',
			700: '#689f38',
			800: '#558b2f',
			900: '#33691e',
			a100: '#ccff90',
			a200: '#b2ff59',
			a400: '#76ff03',
			a700: '#64dd17',
		},
		lime: {
			50: '#f9fbe7',
			100: '#f0f4c3',
			200: '#e6ee9c',
			300: '#dce775',
			400: '#d4e157',
			500: '#cddc39',
			600: '#c0ca33',
			700: '#afb42b',
			800: '#9e9d24',
			900: '#827717',
			a100: '#f4ff81',
			a200: '#eeff41',
			a400: '#c6ff00',
			a700: '#aeea00',
		},
		yellow: {
			50: '#fffde7',
			100: '#fff9c4',
			200: '#fff59d',
			300: '#fff176',
			400: '#ffee58',
			500: '#ffeb3b',
			600: '#fdd835',
			700: '#fbc02d',
			800: '#f9a825',
			900: '#f57f17',
			a100: '#ffff8d',
			a200: '#ffff00',
			a400: '#ffea00',
			a700: '#ffd600',
		},
		amber: {
			50: '#fff8e1',
			100: '#ffecb3',
			200: '#ffe082',
			300: '#ffd54f',
			400: '#ffca28',
			500: '#ffc107',
			600: '#ffb300',
			700: '#ffa000',
			800: '#ff8f00',
			900: '#ff6f00',
			a100: '#ffe57f',
			a200: '#ffd740',
			a400: '#ffc400',
			a700: '#ffab00',
		},
		orange: {
			50: '#fff3e0',
			100: '#ffe0b2',
			200: '#ffcc80',
			300: '#ffb74d',
			400: '#ffa726',
			500: '#ff9800',
			600: '#fb8c00',
			700: '#f57c00',
			800: '#ef6c00',
			900: '#e65100',
			a100: '#ffd180',
			a200: '#ffab40',
			a400: '#ff9100',
			a700: '#ff6d00',
		},
		'deep-orange': {
			50: '#fbe9e7',
			100: '#ffccbc',
			200: '#ffab91',
			300: '#ff8a65',
			400: '#ff7043',
			500: '#ff5722',
			600: '#f4511e',
			700: '#e64a19',
			800: '#d84315',
			900: '#bf360c',
			a100: '#ff9e80',
			a200: '#ff6e40',
			a400: '#ff3d00',
			a700: '#dd2c00',
		},
		brown: {
			50: '#efebe9',
			100: '#d7ccc8',
			200: '#bcaaa4',
			300: '#a1887f',
			400: '#8d6e63',
			500: '#795548',
			600: '#6d4c41',
			700: '#5d4037',
			800: '#4e342e',
			900: '#3e2723',
		},
		grey: {
			50: '#fafafa',
			100: '#f5f5f5',
			200: '#eeeeee',
			300: '#e0e0e0',
			400: '#bdbdbd',
			500: '#9e9e9e',
			600: '#757575',
			700: '#616161',
			800: '#424242',
			900: '#212121',
		},
		'blue-grey': {
			50: '#eceff1',
			100: '#cfd8dc',
			200: '#b0bec5',
			300: '#90a4ae',
			400: '#78909c',
			500: '#607d8b',
			600: '#546e7a',
			700: '#455a64',
			800: '#37474f',
			900: '#263238',
			1000: '#11171a',
		},
	},
	hasFashion: function () {
		return !!window.Fashion && !!Fashion.css && Fashion.css.setVariables;
	},
	setAutoUpdateMeta: function (a) {
		this._autoUpdateMeta = a;
	},
	getAutoUpdateMeta: function () {
		return this._autoUpdateMeta;
	},
	getDefaultWeight: function () {
		return this._defaultWeight;
	},
	setDarkMode: function (a) {
		if (!this.hasFashion()) {
			return;
		}
		Fashion.css.setVariables({ 'dark-mode': a ? 'true' : 'false' });
	},
	setColors: function (a) {
		var b = {},
			d,
			c;
		if (!this.hasFashion()) {
			return;
		}
		a = Ext.merge(
			{
				baseWeight: this.getDefaultWeight(),
				accentWeight: this.getDefaultWeight(),
			},
			a,
		);
		d = this._colors[a.base];
		c = this._colors[a.accent];
		if (d) {
			if (d[a.baseWeight]) {
				b['base-color-name'] = a.base;
				if (this.getAutoUpdateMeta()) {
					this.updateMetaThemeColor(a.base, a.baseWeight);
				}
			} else {
				Ext.Logger.warn(
					'Base color weight: ' +
						a.baseWeight +
						' is not a valid weight',
					this,
				);
			}
		} else if (a.base) {
			Ext.Logger.warn(
				'Base color: ' + a.base + ' is not a valid material color',
				this,
			);
		}
		if (c) {
			if (c[a.accentWeight]) {
				b['accent-color-name'] = a.accent;
			} else {
				Ext.Logger.warn(
					'Accent color weight: ' +
						a.accentWeight +
						' is not a valid weight',
					this,
				);
			}
		} else if (a.accent) {
			Ext.Logger.warn(
				'Accent color: ' + a.accent + ' is not a valid material color',
				this,
			);
		}
		if (a.darkMode !== null) {
			b['dark-mode'] = a.darkMode ? 'true' : 'false';
		}
		Fashion.css.setVariables(b);
	},
	updateMetaThemeColor: function (e, b) {
		var a = this._colors[e],
			d = Ext.manifest.material.toolbar.dynamic,
			c;
		if (!b) {
			b = this.getDefaultWeight();
		}
		if (Ext.platformTags.android && Ext.platformTags.chrome && d && a) {
			a = a[b];
			c = Ext.query('meta[name="theme-color"]')[0];
			if (c) {
				c.setAttribute('content', a);
			}
		}
	},
	getColors: function () {
		return this._colors;
	},
});
var color, toolbarIsDynamic, head, meta;
Ext.require('Ext.theme.Material');
if (
	Ext.platformTags.android &&
	Ext.platformTags.chrome &&
	Ext.manifest.material &&
	Ext.manifest.material.toolbar
) {
	color = Ext.manifest.material.toolbar.color;
	toolbarIsDynamic = Ext.manifest.material.toolbar.dynamic;
	head = document.head;
	if (toolbarIsDynamic && Ext.supports.CSSVariables) {
		color = getComputedStyle(document.body).getPropertyValue(
			'--primary-color-md',
		);
		color = color.replace(/ /g, '').replace(/^#(?:\\3)?/, '#');
	}
	if (color) {
		meta = document.createElement('meta');
		meta.setAttribute('name', 'theme-color');
		meta.setAttribute('content', color);
		head.appendChild(meta);
	}
}
Ext.namespace('Ext.theme.is').Material = !0;
Ext.theme.name = 'Material';
