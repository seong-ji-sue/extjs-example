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
Ext.define('Ext.theme.triton.list.TreeItem', {
	override: 'Ext.list.TreeItem',
	compatibility: Ext.isIE8,
	setFloated: function (b, a) {
		this.callParent([b, a]);
		this.toolElement.syncRepaint();
	},
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
