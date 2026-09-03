import React, { useState, useEffect } from "react";
import {
  LayoutDashboard, Users, Wallet, CalendarCheck, Receipt, Truck, Boxes,
  Factory, Warehouse, ShoppingCart, BarChart3, UserCog, Menu, X, Plus,
  Pencil, ChevronRight, ArrowLeft, TrendingUp, AlertTriangle, Wheat,
  Trash2, Search, CheckCircle, Activity, Moon, Sun, Globe
} from "lucide-react";

const TRANSLATIONS = {
  "Dashboard": "முகப்பு (Dashboard)",
  "Labours": "பணியாளர்கள் (Labours)",
  "Expenses": "செலவுகள் (Expenses)",
  "Purchase & Sales": "கொள்முதல் & விற்பனை",
  "Production": "உற்பத்தி (Production)",
  "Godown": "இருப்பு (Godown)",
  "Reports": "அறிக்கைகள் (Reports)",
  "User Management": "பயனர் மேலாண்மை",
  "Gate Pass": "கேட் பாஸ் (Gate Pass)",
  "Cancel": "ரத்து செய்",
  "Save": "சேமி (Save)",
  "Back": "பின்னே செல்",
  "Date": "தேதி (Date)",
  "Real-time operations overview": "நிகழ்நேர செயல்பாடுகளின் சுருக்கம்",
  "Active Labours": "பணியாளர்கள்",
  "Today's Revenue": "இன்றைய வருமானம்",
  "Low Stock Alerts": "குறைந்த இருப்பு அலர்ட்",
  "Fin. Bags in Stock": "அரிசி மூட்டைகள் இருப்பு",
  "Inventory Snapshot": "இருப்பு சுருக்கம் (Inventory Snapshot)",
  "Low Stock Warning": "குறைந்த இருப்பு எச்சரிக்கை",
  "Stock levels are healthy.": "இருப்பு சீராக உள்ளது.",
  "Quick Actions": "விரைவான செயல்கள்",
  "Manage Labours": "பணியாளர்களை நிர்வகிக்க",
  "Mark Attendance": "வருகை பதிவு செய்ய",
  "New Sales Invoice": "புதிய விற்பனை ரசீது",
  "New Procurement": "புதிய கொள்முதல்",
  "Labours Management": "பணியாளர் மேலாண்மை",
  "Manage labour records, mark attendance, and calculate salary/bonus": "பணியாளர் விவரங்கள், வருகை மற்றும் சம்பளத்தை நிர்வகிக்க",
  "Labours List": "பணியாளர் பட்டியல்",
  "Attendance": "வருகை (Attendance)",
  "Payroll & Bonus": "சம்பளம் & போனஸ்",
  "Add Labour": "பணியாளர் சேர்",
  "ID No": "அடையாள எண்",
  "Name": "பெயர்",
  "Role": "பதவி",
  "Phone": "போன் நம்பர்",
  "Base Salary": "அடிப்படை சம்பளம்",
  "Advance Bal.": "அட்வான்ஸ் பேலன்ஸ்",
  "Status": "நிலை",
  "Edit Labour": "பணியாளர் திருத்து",
  "Monthly Salary": "மாத சம்பளம்",
  "Advance Taken": "வாங்கிய அட்வான்ஸ்",
  "Save Labour": "பணியாளரை சேமி",
  "Daily Tracking": "தினசரி பதிவு",
  "Labour Name": "பணியாளர் பெயர்",
  "Present": "வந்தவர் (Present)",
  "Half Day": "அரை நாள் (Half Day)",
  "Absent": "வராதவர் (Absent)",
  "Remark": "குறிப்பு",
  "Save Attendance": "வருகையை சேமி",
  "Daily Workers": "தினக்கூலி (Daily)",
  "Monthly Staff": "மாத சம்பளம் (Monthly)",
  "Add Payroll Entry": "சம்பளப் பதிவு சேர்",
  "Worker Name": "தினக்கூலி பெயர்",
  "Wage": "கூலி (Wage)",
  "Bonus Amount (Extra Pay)": "போனஸ் / கூடுதல் (Bonus)",
  "Deduction (If any)": "பிடித்தம் (Deduction)",
  "Fixed Monthly Salary": "மாத சம்பளம்",
  "Calculated Base": "கணக்கிடப்பட்ட சம்பளம்",
  "Net Pay": "வழங்க வேண்டிய சம்பளம்",
  "Save Details": "விவரங்களை சேமி",
  "Trade & Transactions": "வர்த்தகம் & பரிவர்த்தனைகள்",
  "Manage inward purchases and outward sales invoices": "கொள்முதல் மற்றும் விற்பனை ரசீதுகளை நிர்வகிக்க",
  "Purchase (Inward)": "கொள்முதல் (Purchase)",
  "Sales (Outward)": "விற்பனை (Sales)",
  "New Purchase": "புதிய கொள்முதல்",
  "New Purchase Entry": "புதிய கொள்முதல் பதிவு",
  "Inward Procurement": "உள்ளீடு (Inward)",
  "Vendor Name": "விற்பனையாளர் பெயர்",
  "Time": "நேரம் (Time)",
  "Item": "பொருள் (Item)",
  "Batch Number": "பேட்ச் எண் (Batch No)",
  "Moisture Level (%)": "ஈரப்பதம் (Moisture %)",
  "Gross Load (kg)": "மொத்த லோட் (Gross Load kg)",
  "Empty Weight (kg)": "வண்டி எடை (Empty Weight kg)",
  "Net Qty (kg)": "நிகர எடை (Net Qty kg)",
  "Rate per unit": "ஒரு கிலோ விலை (Rate)",
  "Total Value": "மொத்த மதிப்பு (Total)",
  "Advance Payment": "அட்வான்ஸ் (Advance)",
  "Advance": "அட்வான்ஸ் (Advance)",
  "Balance Due": "மீதி தொகை (Balance)",
  "Save Purchase": "கொள்முதலை சேமி",
  "Complete Sale": "விற்பனையை முடி",
  "Customer Name": "வாடிக்கையாளர் பெயர்",
  "Finished Good Batch": "தயாரான பொருள் பேட்ச்",
  "Quantity": "அளவு (Quantity)",
  "Unit Price (₹)": "விலை (Price ₹)",
  "Invoice Total": "மொத்த தொகை (Total)",
  "Recent Sales": "சமீபத்திய விற்பனை",
  "Production (White Ponni & By-Products)": "உற்பத்தி (வெள்ளை பொன்னி & உபபொருட்கள்)",
  "Settings": "உற்பத்தி அமைப்புகள்",
  "Log Production Run": "உற்பத்தியைப் பதிவு செய்",
  "Log Mill Production": "மில் உற்பத்தியைப் பதிவு செய்",
  "Paddy Batch (In)": "நெல் பேட்ச் (உள்ளீடு)",
  "Variety": "நெல் வகை",
  "Paddy Moisture (%)": "நெல் ஈரப்பதம் (%)",
  "Paddy Input Qty (kg)": "நெல் உள்ளீடு அளவு (kg)",
  "White Ponni Rice (kg)": "வெள்ளை பொன்னி அரிசி (kg)",
  "Broken Rice / Noy (kg)": "நொய் (kg)",
  "Bran / Thavidu (kg)": "தவிடு (kg)",
  "Husk / Umi (kg)": "உமி / பதர் (kg)",
  "Viragu / Firewood (kg)": "விறகு (kg)",
  "Fuel / Diesel (Liters)": "டீசல் (லிட்டர்)",
  "Jute Bags": "சணல் சாக்குகள்",
  "Plastic Bags": "பிளாஸ்டிக் சாக்குகள்",
  "Save & Update Inventory": "சேமி & இருப்பை புதுப்பி",
  "Godown Stock Tracking": "குடோன் இருப்பு கண்காணிப்பு",
  "Drill down from category to batch": "வகை முதல் பேட்ச் வரை பார்க்க",
  "Raw Materials": "மூலப்பொருட்கள்",
  "Finished Goods": "முடிந்த பொருட்கள்",
  "Godown List": "குடோன் பட்டியல்",
  "Add Godown": "புதிய குடோன் சேர்",
  "Godown No / Name": "குடோன் எண் / பெயர்",
  "Location": "இடம் (Location)",
  "Stock Capacity / Total Items": "மொத்த கொள்ளளவு / பொருட்கள்",
  "Reports & Analytics": "அறிக்கைகள் & பகுப்பாய்வு",
  "Net Profit": "நிகர லாபம் (Net Profit)",
  "Total Revenue": "மொத்த வருமானம்",
  "Purchases": "கொள்முதல்",
  "Expenses": "செலவுகள்",
  "System Users": "கணினி பயனர்கள்",
  "Add User": "பயனர் சேர்",
  "Username": "பயனர் பெயர்",
  "Active": "செயலில் (Active)",
  "Completed": "முடிந்தது (Completed)",
  "Lorry Name": "லாரி பெயர் (Lorry Name)",
  "Vehicle No": "வண்டி எண் (Vehicle No)",
  "Time In": "உள்ளே வந்த நேரம் (Time In)",
  "Time Out": "வெளியேறிய நேரம் (Time Out)",
  "Description": "விவரம் (Description)",
  "Add Entry": "புதிய பதிவு",
  "Add Gate Pass": "கேட் பாஸ் பதிவு",
  "Vehicle Entry": "வாகனப் பதிவு"
};

const NAV = [
  { key: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { key: "gatepass", label: "Gate Pass", icon: Truck },
  { key: "employees", label: "Labours", icon: Users },
  { key: "expenses", label: "Expenses", icon: Receipt },
  { key: "trade", label: "Purchase & Sales", icon: Truck },
  { key: "production", label: "Production", icon: Factory },
  { key: "inventory", label: "Godown", icon: Warehouse },
  { key: "reports", label: "Reports", icon: BarChart3 },
  { key: "users", label: "User Management", icon: UserCog },
];

const fmtINR = (n) => "₹" + Number(n || 0).toLocaleString("en-IN", { maximumFractionDigits: 0 });
const generateId = (prefix) => `${prefix}-${Math.floor(1000 + Math.random() * 9000)}`;
const getToday = () => new Date().toISOString().split("T")[0];
const getTime = () => new Date().toTimeString().split(" ")[0].substring(0, 5);

const PREFIXES = {
  employees: "EMP", payrollDaily: "PD", payrollMonthly: "PM", gatepass: "GP",
  attendance: "ATT", expenses: "EXP", procurement: "PUR", production: "PRD",
  inventory: "INV", godowns: "GDN", invoices: "SAL", users: "USR"
};
const nextId = (module) => generateId(PREFIXES[module] || module.slice(0, 3).toUpperCase());

const INITIAL_DATA = {
  gatepass: [],
  godowns: [
    { id: "GDN-101", number: "Godown 1", location: "Mill Main Yard", desc: "Raw Paddy Storage Area" },
    { id: "GDN-102", number: "Godown 2", location: "Processing Unit Near Dryer", desc: "Finished Rice Bags Storage" }
  ],
  employees: [
    { id: "EMP-1001", empId: "EMP-1001", name: "Murugan S", role: "Mill Operator", phone: "98421 23456", joined: "2022-03-11", salary: 18000, advance: 0, status: "Active" },
    { id: "EMP-1002", empId: "EMP-1002", name: "Kavitha R", role: "Accounts", phone: "98765 11223", joined: "2021-07-02", salary: 22000, advance: 0, status: "Active" }
  ],
  payrollDaily: [],
  payrollMonthly: [],
  attendance: [],
  expenses: [
    { id: 'EXP-101', date: getToday(), category: 'Extra', desc: 'Meals', amount: 500 },
    { id: 'EXP-102', date: getToday(), category: 'AGS Home', desc: 'AGS Maintenance', amount: 1200 },
  ],
  procurement: [],
  productionSettings: { bagStock: 1000, bagVolume: 25 },
  production: [],
  inventory: [
    { id: "INV-1001", type: "Raw Material", category: "Paddy", item: "Ponni Paddy", batch: "B-100", qty: 5000, cost: 20 },
    { id: "INV-1002", type: "Finished Good", category: "Rice", item: "Ponni Rice", batch: "F-100", qty: 1000, cost: 45 },
    { id: "INV-1003", type: "Fuel", category: "Diesel", item: "Generator Diesel", batch: "D-100", qty: 500, cost: 90 },
  ],
  invoices: [],
  users: [{ id: "USR-1000", username: "admin", role: "Super Admin", status: "Active" }]
};

function useERPData() {
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem("rm_erp_data_v24");
      return saved ? JSON.parse(saved) : INITIAL_DATA;
    } catch {
      return INITIAL_DATA;
    }
  });

  useEffect(() => {
    localStorage.setItem("rm_erp_data_v24", JSON.stringify(data));
  }, [data]);

  const update = (module, item) => {
    setData((prev) => {
      const list = prev[module] || [];
      const existingIndex = item.id ? list.findIndex((x) => x.id === item.id) : -1;
      if (existingIndex === -1) {
        const id = item.id || nextId(module);
        return { ...prev, [module]: [{ ...item, id }, ...list] };
      }
      const updated = [...list];
      updated[existingIndex] = { ...item };
      return { ...prev, [module]: updated };
    });
  };

  const remove = (module, id) => {
    setData((prev) => ({ ...prev, [module]: (prev[module] || []).filter((x) => x.id !== id) }));
  };

  const processProcurement = (item) => {
    const finalBatch = item.batch && item.batch.trim() ? item.batch.trim() : generateId("BAT");
    const itemWithBatch = { ...item, batch: finalBatch };
    update("procurement", itemWithBatch);
    setData((prev) => {
      const newInv = {
        id: nextId("inventory"),
        type: item.invType || "Raw Material",
        category: (item.item && item.item.split(" ")[0]) || "General",
        item: item.item,
        batch: finalBatch,
        qty: Number(item.netQty || item.qty || 0),
        cost: Number(item.rate || 0),
        moisture: item.moisture || 0 
      };
      return { ...prev, inventory: [newInv, ...(prev.inventory || [])] };
    });
  };

  const processProduction = (prod) => {
    update("production", prod);
    setData((prev) => {
      const settings = prev.productionSettings || { bagStock: 1000, bagVolume: 25 };
      const bagVol = settings.bagVolume || 25;
      const bagStk = settings.bagStock || 0;

      let inv = (prev.inventory || []).map((x) =>
        x.batch === prod.paddyBatch ? { ...x, qty: Math.max(0, x.qty - Number(prod.paddyQty || 0)) } : x
      );

      const totalBagsOut = Number(prod.riceQty || 0);
      const newSettings = { ...settings, bagStock: Math.max(0, bagStk - totalBagsOut) };

      const finishedItems = [
        { id: nextId("inventory"), type: "Finished Good", category: "Rice", item: "White Ponni Rice", batch: generateId("FB-WP"), qty: Number(prod.riceQty || 0), cost: 45 },
        { id: nextId("inventory"), type: "Finished Good", category: "Broken", item: "Broken Rice (Noy)", batch: generateId("FB-BR"), qty: Number(prod.brokenQty || 0), cost: 25 },
        { id: "INV-BRAN", type: "Finished Good", category: "Bran", item: "Bran (Thavidu)", batch: generateId("FB-BN"), qty: Number(prod.branQty || 0), cost: 15 },
        { id: "INV-HUSK", type: "Finished Good", category: "Husk", item: "Husk (Umi)", batch: generateId("FB-HS"), qty: Number(prod.huskQty || 0), cost: 5 },
      ].filter(i => i.qty > 0);

      return { ...prev, inventory: [...finishedItems, ...inv], productionSettings: newSettings };
    });
  };

  const processSale = (invoice) => {
    update("invoices", invoice);
    setData((prev) => {
      let inv = [...(prev.inventory || [])];
      (invoice.items || []).forEach((cartItem) => {
        inv = inv.map((x) => (x.batch === cartItem.batch ? { ...x, qty: Math.max(0, x.qty - cartItem.qty) } : x));
      });
      return { ...prev, inventory: inv };
    });
  };

  return { data, update, remove, setData, processProcurement, processProduction, processSale };
}

function Button({ children, variant = "primary", size = "md", icon: Icon, className = "", ...rest }) {
  return (
    <button className={`btn btn-${variant} btn-${size} ${className}`} {...rest}>
      {Icon && <Icon size={16} />}
      {children}
    </button>
  );
}

function Card({ children, className = "", ...rest }) {
  return <div className={`card ${className}`} {...rest}>{children}</div>;
}

function Badge({ tone = "neutral", children }) {
  return <span className={`badge badge-${tone}`}>{children}</span>;
}

function PageHeader({ title, subtitle, action }) {
  return (
    <div className="page-header">
      <div><h1>{title}</h1>{subtitle && <p>{subtitle}</p>}</div>
      {action && <div className="header-actions">{action}</div>}
    </div>
  );
}

function Field({ label, children, full = false }) {
  return (
    <label className={`field ${full ? "field-full" : ""}`}>
      <span>{label}</span>
      {children}
    </label>
  );
}

function Tabs({ tabs, active, onChange }) {
  return (
    <div className="tabs" role="tablist">
      {tabs.map((t) => (
        <button key={t.key} role="tab" aria-selected={active === t.key} className={`tab ${active === t.key ? "tab-active" : ""}`} onClick={() => onChange(t.key)}>
          {t.label}
        </button>
      ))}
    </div>
  );
}

function Table({ columns = [], rows = [], emptyText = "No records found.", onRowClick }) {
  if (!rows || !rows.length) {
    return (
      <div className="empty-state">
        <div className="empty-icon"><Boxes size={36} /></div>
        <p>{emptyText}</p>
      </div>
    );
  }
  return (
    <div className="table-scroll">
      <table className="data-table">
        <thead>
          <tr>{columns.map((c, i) => <th key={i} style={c.width ? { width: c.width } : undefined}>{c.label}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.id || i} onClick={() => onRowClick && onRowClick(row)} style={{ cursor: onRowClick ? "pointer" : "default" }}>
              {columns.map((c, j) => <td key={j} data-label={c.label}>{c.render ? c.render(row) : row[c.key]}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FormPage({ title, subtitle, onCancel, children, t }) {
  return (
    <div>
      <PageHeader title={title} subtitle={subtitle} action={<Button variant="ghost" icon={ArrowLeft} onClick={onCancel}>{t("Back")}</Button>} />
      <Card className="form-card">{children}</Card>
    </div>
  );
}

function Dashboard({ data, go, t }) {
  const emps = data.employees || [];
  const invoices = data.invoices || [];
  const inventory = data.inventory || [];

  const activeEmps = emps.filter((e) => e.status === "Active").length;
  const todaysRevenue = invoices.filter((i) => i.date === getToday()).reduce((sum, i) => sum + (i.total || 0), 0);
  const lowStock = inventory.filter((i) => (i.qty || 0) <= 50);
  const finishedBags = inventory.filter((i) => i.type === "Finished Good").reduce((s, i) => s + (i.qty || 0), 0);

  const quickActions = [
    { label: t("Manage Labours"), target: "employees" },
    { label: t("New Sales Invoice"), target: "trade" },
    { label: t("New Procurement"), target: "trade" },
  ];

  return (
    <div>
      <PageHeader title={t("Dashboard")} subtitle={t("Real-time operations overview")} />
      <div className="grid stat-grid">
        <Card className="stat-card">
          <div className="stat-icon tone-brown"><Users size={20} /></div>
          <div><div className="stat-value">{activeEmps}</div><div className="stat-label">{t("Active Labours")}</div></div>
        </Card>
        <Card className="stat-card">
          <div className="stat-icon tone-green"><TrendingUp size={20} /></div>
          <div><div className="stat-value">{fmtINR(todaysRevenue)}</div><div className="stat-label">{t("Today's Revenue")}</div></div>
        </Card>
        <Card className="stat-card">
          <div className="stat-icon tone-amber"><AlertTriangle size={20} /></div>
          <div><div className="stat-value">{lowStock.length}</div><div className="stat-label">{t("Low Stock Alerts")}</div></div>
        </Card>
        <Card className="stat-card">
          <div className="stat-icon tone-brown"><Boxes size={20} /></div>
          <div><div className="stat-value">{finishedBags}</div><div className="stat-label">{t("Fin. Bags in Stock")}</div></div>
        </Card>
      </div>
      
      <div className="grid dashboard-grid">
        <Card className="dashboard-table-card">
          <h3 className="card-title">{t("Inventory Snapshot")}</h3>
          <Table
            columns={[{ key: "item", label: "Item" }, { key: "type", label: "Type" }, { key: "batch", label: "Batch" }, { key: "qty", label: "Qty" }]}
            rows={inventory.slice(0, 5)}
            emptyText="No inventory yet."
          />
        </Card>
        
        <div className="dashboard-right-col">
          <Card>
            <h3 className="card-title"><AlertTriangle size={16} className="title-icon" /> {t("Low Stock Warning")}</h3>
            {lowStock.length === 0 ? <p className="muted">{t("Stock levels are healthy.")}</p> : (
              <div className="low-stock-panel">
                {lowStock.slice(0, 5).map((l, i) => (
                  <div key={i} className="low-stock-item">
                    <div className="ls-info"><strong>{l.item}</strong><span>Batch: {l.batch}</span></div>
                    <Badge tone="red">{l.qty} left</Badge>
                  </div>
                ))}
              </div>
            )}
          </Card>
          
          <Card>
            <h3 className="card-title">{t("Quick Actions")}</h3>
            <div className="quick-actions">
              {quickActions.map((q) => (
                <button key={q.label} className="quick-action" onClick={() => go(q.target)}>
                  {q.label}<ChevronRight size={16} />
                </button>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

function GatePass({ data, update, remove, t }) {
  const [view, setView] = useState("list");
  if (view === "form") return <GatePassForm onCancel={() => setView("list")} onSave={(form) => { update("gatepass", form); setView("list"); }} t={t} />;

  return (
    <div>
      <PageHeader title={t("Gate Pass")} action={<Button icon={Plus} onClick={() => setView("form")}>{t("Add Entry")}</Button>} />
      <Card>
        <Table
          columns={[
            { key: "date", label: t("Date") },
            { key: "lorryName", label: t("Lorry Name") },
            { key: "vehicleNo", label: t("Vehicle No") },
            { key: "timeIn", label: t("Time In") },
            { key: "timeOut", label: t("Time Out") },
            { key: "advance", label: t("Advance"), render: (r) => fmtINR(r.advance) },
            {
              key: "actions", label: "", width: 60,
              render: (r) => (
                <button className="icon-btn icon-btn-danger" onClick={() => remove("gatepass", r.id)}><Trash2 size={15} /></button>
              )
            }
          ]}
          rows={data.gatepass || []}
          emptyText="No records found."
        />
      </Card>
    </div>
  );
}

function GatePassForm({ onCancel, onSave, t }) {
  const [form, setForm] = useState({ date: getToday(), lorryName: "", vehicleNo: "", phone: "", timeIn: getTime(), timeOut: "", advance: 0, desc: "" });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  return (
    <FormPage title={t("Add Gate Pass")} subtitle={t("Vehicle Entry")} onCancel={onCancel} t={t}>
      <div className="form-grid">
        <Field label={t("Date")}><input type="date" value={form.date} onChange={set("date")} /></Field>
        <Field label={t("Lorry Name")}><input value={form.lorryName} onChange={set("lorryName")} /></Field>
        <Field label={t("Vehicle No")}><input value={form.vehicleNo} onChange={set("vehicleNo")} /></Field>
        <Field label={t("Phone")}><input type="tel" value={form.phone} onChange={set("phone")} /></Field>
        <Field label={t("Time In")}><input type="time" value={form.timeIn} onChange={set("timeIn")} /></Field>
        <Field label={t("Time Out")}><input type="time" value={form.timeOut} onChange={set("timeOut")} /></Field>
        <Field label={t("Advance")}><input type="number" min="0" value={form.advance} onChange={set("advance")} /></Field>
        <Field label={t("Description")} full>
          <textarea value={form.desc} onChange={set("desc")} rows={2} />
        </Field>
      </div>
      <div className="form-actions">
        <Button variant="secondary" onClick={onCancel}>{t("Cancel")}</Button>
        <Button onClick={() => onSave({ ...form, advance: Number(form.advance) })}>{t("Save")}</Button>
      </div>
    </FormPage>
  );
}

function EmployeeHub({ data, update, remove, t }) {
  const [tab, setTab] = useState("directory");

  return (
    <div>
      <PageHeader 
        title={t("Labours Management")} 
        subtitle={t("Manage labour records, mark attendance, and calculate salary/bonus")} 
      />
      <Tabs 
        tabs={[
          { key: "directory", label: t("Labours List") }, 
          { key: "attendance", label: t("Attendance") },
          { key: "payroll", label: t("Payroll & Bonus") }
        ]} 
        active={tab} 
        onChange={setTab} 
      />

      {tab === "directory" && <EmployeeDirectory data={data} update={update} remove={remove} t={t} />}
      {tab === "attendance" && <Attendance data={data} update={update} remove={remove} t={t} />}
      {tab === "payroll" && <Payroll data={data} update={update} remove={remove} t={t} />}
    </div>
  );
}

function EmployeeDirectory({ data, update, remove, t }) {
  const [view, setView] = useState("list");
  const [editing, setEditing] = useState(null);
  const [query, setQuery] = useState("");

  if (view === "form") {
    return (
      <EmployeeForm
        data={data}
        initial={editing}
        onCancel={() => { setEditing(null); setView("list"); }}
        onSave={(form) => { update("employees", form); setEditing(null); setView("list"); }}
        t={t}
      />
    );
  }

  const all = data.employees || [];
  const rows = query ? all.filter((e) => `${e.name} ${e.role} ${e.empId}`.toLowerCase().includes(query.toLowerCase())) : all;

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '10px' }}>
        <div className="search-row" style={{ margin: 0, flex: 1, minWidth: '200px' }}>
          <Search size={15} />
          <input placeholder="Search name, role or ID…" value={query} onChange={(e) => setQuery(e.target.value)} />
        </div>
        <Button icon={Plus} onClick={() => { setEditing(null); setView("form"); }}>{t("Add Labour")}</Button>
      </div>
      <Card>
        <Table
          columns={[
            { key: "empId", label: t("ID No") }, 
            { key: "name", label: t("Name") }, 
            { key: "role", label: t("Role") }, 
            { key: "phone", label: t("Phone") },
            { key: "salary", label: t("Base Salary"), render: (r) => fmtINR(r.salary) },
            { key: "advance", label: t("Advance Bal."), render: (r) => <strong>{fmtINR(r.advance)}</strong> },
            { key: "status", label: t("Status"), render: (r) => <Badge tone={r.status === "Active" ? "green" : "red"}>{t(r.status) || r.status}</Badge> },
            {
              key: "actions", label: "", width: 90,
              render: (r) => (
                <div className="row-actions">
                  <button className="icon-btn" onClick={() => { setEditing(r); setView("form"); }}><Pencil size={15} /></button>
                  <button className="icon-btn icon-btn-danger" onClick={() => remove("employees", r.id)}><Trash2 size={15} /></button>
                </div>
              )
            }
          ]}
          rows={rows}
          emptyText={query ? "No labours match your search." : "No labours yet."}
        />
      </Card>
    </div>
  );
}

function EmployeeForm({ data, initial, onCancel, onSave, t }) {
  const [form, setForm] = useState(() => {
    if (initial) return { ...initial };
    const allEmps = data.employees || [];
    let nextNum = 1001;
    if (allEmps.length > 0) {
      const numbers = allEmps.map(e => parseInt((e.empId || "EMP-0").replace(/\D/g, ''))).filter(n => !isNaN(n));
      if (numbers.length > 0) nextNum = Math.max(...numbers) + 1;
    }
    const newId = `EMP-${nextNum}`;
    return { id: nextId("employees"), empId: newId, name: "", role: "", phone: "", joined: getToday(), salary: 0, advance: 0, status: "Active" };
  });

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  return (
    <FormPage title={initial ? t("Edit Labour") : t("Add Labour")} subtitle={t("Labours List")} onCancel={onCancel} t={t}>
      <div className="form-grid">
        <Field label={t("ID Card No (Auto-Assigned)")}><input disabled value={form.empId} className="input-disabled" /></Field>
        <Field label={t("Name")}><input value={form.name} onChange={set("name")} placeholder="e.g. Murugan S" /></Field>
        <Field label={t("Role")}><input value={form.role} onChange={set("role")} placeholder="e.g. Mill Operator" /></Field>
        <Field label={t("Phone")}><input type="tel" value={form.phone} onChange={set("phone")} placeholder="98xxx xxxxx" /></Field>
        <Field label={t("Join Date")}><input type="date" value={form.joined} onChange={set("joined")} /></Field>
        <Field label={t("Monthly Salary")}><input type="number" min="0" value={form.salary} onChange={set("salary")} /></Field>
        <Field label={t("Advance Taken")}><input type="number" min="0" value={form.advance} onChange={set("advance")} placeholder="Running advance balance" /></Field>
        <Field label={t("Status")}>
          <select value={form.status} onChange={set("status")}>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </Field>
      </div>
      <div className="form-actions">
        <Button variant="secondary" onClick={onCancel}>{t("Cancel")}</Button>
        <Button onClick={() => onSave({ ...form, salary: Number(form.salary) || 0, advance: Number(form.advance) || 0 })}>{t("Save Labour")}</Button>
      </div>
    </FormPage>
  );
}

function Attendance({ data, update, remove, t }) {
  const [view, setView] = useState("list");
  if (view === "form") return <AttendanceForm emps={data.employees || []} onCancel={() => setView("list")} onSave={(form) => { update("attendance", form); setView("list"); }} t={t} />;

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '16px' }}>
        <Button icon={Plus} onClick={() => setView("form")}>{t("Mark Attendance")}</Button>
      </div>
      <Card>
        <Table
          columns={[
            { key: "date", label: t("Date") }, { key: "empId", label: "ID" },
            { key: "status", label: t("Status"), render: (r) => <Badge tone={r.status === "Present" ? "green" : r.status === "Absent" ? "red" : "amber"}>{t(r.status) || r.status}</Badge> },
            { key: "remark", label: t("Remark") },
            { key: "actions", label: "", width: 60, render: (r) => <button className="icon-btn icon-btn-danger" onClick={() => remove("attendance", r.id)}><Trash2 size={15} /></button> }
          ]}
          rows={data.attendance || []}
          emptyText="No attendance marked yet."
        />
      </Card>
    </div>
  );
}

function AttendanceForm({ emps, onCancel, onSave, t }) {
  const [form, setForm] = useState({ date: getToday(), empId: "", status: "Present", remark: "" });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  
  return (
    <FormPage title={t("Mark Attendance")} subtitle={t("Daily Tracking")} onCancel={onCancel} t={t}>
      <div className="form-grid">
        <Field label={t("Labour Name")}>
          <select value={form.empId} onChange={set("empId")}>
            <option value="">Select...</option>
            {emps.map((e) => <option key={e.empId} value={e.empId}>{e.empId} - {e.name}</option>)}
          </select>
        </Field>
        <Field label={t("Date")}><input type="date" value={form.date} onChange={set("date")} /></Field>
        <Field label={t("Status")}>
          <select value={form.status} onChange={set("status")}>
            <option value="Present">Present</option>
            <option value="Half Day">Half Day</option>
            <option value="Absent">Absent</option>
          </select>
        </Field>
        <Field label={t("Remark")}><input value={form.remark} onChange={set("remark")} placeholder="Optional remark" /></Field>
      </div>
      <div className="form-actions">
        <Button variant="secondary" onClick={onCancel}>{t("Cancel")}</Button>
        <Button onClick={() => onSave(form)}>{t("Save Attendance")}</Button>
      </div>
    </FormPage>
  );
}

function Payroll({ data, update, remove, t }) {
  const [tab, setTab] = useState("daily");
  const [view, setView] = useState("list");

  if (view === "form") {
    return (
      <PayrollForm
        type={tab}
        emps={data.employees || []}
        attendance={data.attendance || []}
        onCancel={() => setView("list")}
        onSave={(form) => { update(tab === "daily" ? "payrollDaily" : "payrollMonthly", form); setView("list"); }}
        t={t}
      />
    );
  }

  return (
    <div>
      <div className="payroll-header-mobile">
        <Tabs tabs={[{ key: "daily", label: t("Daily Workers") }, { key: "monthly", label: t("Monthly Staff") }]} active={tab} onChange={(k) => { setTab(k); setView("list"); }} />
        <Button icon={Plus} onClick={() => setView("form")}>{t("Add Payroll Entry")}</Button>
      </div>
      <Card>
        {tab === "daily" ? (
          <Table
            columns={[
              { key: "date", label: t("Date") }, { key: "name", label: t("Worker Name") }, { key: "wage", label: t("Wage"), render: (r) => fmtINR(r.wage) },
              { key: "remark", label: t("Remark") },
              { key: "actions", label: "", width: 60, render: (r) => <button className="icon-btn icon-btn-danger" onClick={() => remove("payrollDaily", r.id)}><Trash2 size={15} /></button> }
            ]}
            rows={data.payrollDaily || []}
            emptyText="No daily wage entries yet."
          />
        ) : (
          <Table
            columns={[
              { key: "date", label: t("Date") }, { key: "empId", label: "ID" }, { key: "baseSalary", label: t("Base Salary"), render: (r) => fmtINR(r.baseSalary) },
              { key: "attendanceDays", label: t("Attendance") }, { key: "bonus", label: "Bonus", render: (r) => fmtINR(r.bonus) }, { key: "deduction", label: t("Deduction (If any)"), render: (r) => fmtINR(r.deduction) },
              { key: "netPay", label: t("Net Pay"), render: (r) => <strong>{fmtINR(r.netPay)}</strong> },
              { key: "actions", label: "", width: 60, render: (r) => <button className="icon-btn icon-btn-danger" onClick={() => remove("payrollMonthly", r.id)}><Trash2 size={15} /></button> }
            ]}
            rows={data.payrollMonthly || []}
            emptyText="No monthly payroll entries yet."
          />
        )}
      </Card>
    </div>
  );
}

function PayrollForm({ type, emps, attendance, onCancel, onSave, t }) {
  const isDaily = type === "daily";
  const [form, setForm] = useState(isDaily ? { date: getToday(), name: "", wage: 0, remark: "" } : { date: getToday(), empId: "", bonus: 0, deduction: 0 });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  let baseSalary = 0, attDays = 0, netPay = 0, fixedSalary = 0;
  let hasAttendance = false;

  if (!isDaily && form.empId) {
    const emp = emps.find((e) => e.empId === form.empId);
    if (emp) {
      fixedSalary = Number(emp.salary || 0);
      const currentMonth = (form.date || getToday()).substring(0, 7);
      const monthRecords = (attendance || []).filter((a) => a.empId === form.empId && (a.date || "").startsWith(currentMonth));
      
      if (monthRecords.length > 0) {
        hasAttendance = true;
        attDays = monthRecords.reduce((sum, a) => sum + (a.status === "Present" ? 1 : a.status === "Half Day" ? 0.5 : 0), 0);
        baseSalary = Math.round((fixedSalary / 30) * attDays);
      } else {
        hasAttendance = false;
        attDays = 0;
        baseSalary = fixedSalary;
      }
      netPay = baseSalary + Number(form.bonus || 0) - Number(form.deduction || 0);
    }
  }

  return (
    <FormPage title={isDaily ? t("Add Daily Wage") : t("Add Monthly Payroll")} subtitle="Financials" onCancel={onCancel} t={t}>
      <div className="form-grid">
        <Field label={t("Date")}><input type="date" value={form.date} onChange={set("date")} /></Field>
        {isDaily ? (
          <>
            <Field label={t("Worker Name")}><input value={form.name} onChange={set("name")} placeholder="Manual name entry" /></Field>
            <Field label={t("Wage")}><input type="number" min="0" value={form.wage} onChange={set("wage")} /></Field>
            <Field label={t("Remark")}><input value={form.remark} onChange={set("remark")} /></Field>
          </>
        ) : (
          <>
            <Field label={t("Labour Name")}>
              <select value={form.empId} onChange={set("empId")}>
                <option value="">Select Labour...</option>
                {emps.map((e) => <option key={e.empId} value={e.empId}>{e.empId} - {e.name}</option>)}
              </select>
            </Field>
            <Field label={t("Bonus Amount (Extra Pay)")}><input type="number" min="0" value={form.bonus} onChange={set("bonus")} /></Field>
            <Field label={t("Deduction (If any)")}><input type="number" min="0" value={form.deduction} onChange={set("deduction")} /></Field>
          </>
        )}
      </div>
      {!isDaily && form.empId && (
        <div className="payroll-summary">
          <p>{t("Fixed Monthly Salary")}: <strong>{fmtINR(fixedSalary)}</strong></p>
          {hasAttendance ? (
            <p>Attendance (This Month): <strong>{attDays} Days</strong></p>
          ) : (
            <p className="form-hint" style={{margin: '0 0 8px 0'}}>No attendance records found this month. Defaulting to full salary.</p>
          )}
          <p>{t("Calculated Base")}: <strong>{fmtINR(baseSalary)}</strong></p>
          <p className="calc-total">{t("Net Pay")}: <strong>{fmtINR(netPay)}</strong></p>
        </div>
      )}
      <div className="form-actions">
        <Button variant="secondary" onClick={onCancel}>{t("Cancel")}</Button>
        <Button
          onClick={() => onSave(isDaily
            ? { ...form, wage: Number(form.wage) }
            : { ...form, attendanceDays: hasAttendance ? `${attDays} Days` : "Full", baseSalary, bonus: Number(form.bonus), deduction: Number(form.deduction), netPay }
          )}
        >
          {t("Save Details")}
        </Button>
      </div>
    </FormPage>
  );
}

function TradeHub({ data, processProcurement, processSale, remove, t }) {
  const [tab, setTab] = useState("purchase");

  return (
    <div>
      <PageHeader 
        title={t("Trade & Transactions")} 
        subtitle={t("Manage inward purchases and outward sales invoices")} 
      />
      <Tabs 
        tabs={[
          { key: "purchase", label: t("Purchase (Inward)") }, 
          { key: "sales", label: t("Sales (Outward)") }
        ]} 
        active={tab} 
        onChange={setTab} 
      />

      {tab === "purchase" && <PurchaseModule data={data} processProcurement={processProcurement} t={t} />}
      {tab === "sales" && <SalesModule data={data} processSale={processSale} t={t} />}
    </div>
  );
}

function PurchaseModule({ data, processProcurement, t }) {
  const [view, setView] = useState("list");
  if (view === "form") return <ProcurementForm onCancel={() => setView("list")} onSave={(form) => { processProcurement(form); setView("list"); }} t={t} />;

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '16px' }}>
         <Button icon={Plus} onClick={() => setView("form")}>{t("New Purchase")}</Button>
      </div>
      <Card>
        <Table
          columns={[
            { key: "id", label: "ID" }, 
            { key: "vendor", label: t("Vendor Name") }, 
            { key: "batch", label: t("Batch Number") },
            { key: "date", label: t("Date") },
            { key: "item", label: t("Item") }, 
            { key: "netQty", label: t("Net Qty (kg)") }, 
            { key: "moisture", label: t("Moisture Level (%)"), render: (r) => r.moisture ? `${r.moisture}%` : '-' },
            { key: "totalValue", label: t("Total Value"), render: (r) => fmtINR(r.totalValue) }
          ]}
          rows={data.procurement || []}
          emptyText="No purchases recorded yet."
        />
      </Card>
    </div>
  );
}

function ProcurementForm({ onCancel, onSave, t }) {
  const [form, setForm] = useState({
    vendor: "", batch: "", date: getToday(), time: getTime(), item: "Paddy",
    grossLoad: 0, emptyWeight: 0, netQty: 0, rate: 0, moisture: 0,
    advancePaid: 0, totalValue: 0, balance: 0, invType: "Raw Material"
  });

  const set = (k) => (e) => {
    let val = e.target.value;
    let newForm = { ...form, [k]: val };

    if (k === 'grossLoad' || k === 'emptyWeight' || k === 'rate') {
      let g = Number(k === 'grossLoad' ? val : newForm.grossLoad) || 0;
      let ew = Number(k === 'emptyWeight' ? val : newForm.emptyWeight) || 0;
      let net = Math.max(0, g - ew);
      let r = Number(k === 'rate' ? val : newForm.rate) || 0;
      let total = net * r;
      let adv = Number(newForm.advancePaid) || 0;
      let bal = total - adv;
      newForm = { ...newForm, netQty: net, totalValue: total, balance: bal };
    }

    if (k === 'advancePaid') {
      let total = Number(newForm.totalValue) || 0;
      let adv = Number(val) || 0;
      newForm = { ...newForm, balance: total - adv };
    }

    setForm(newForm);
  };

  return (
    <FormPage title={t("New Purchase Entry")} subtitle={t("Inward Procurement")} onCancel={onCancel} t={t}>
      <div className="form-grid">
        <Field label={t("Vendor Name")}><input value={form.vendor} onChange={set("vendor")} placeholder="Supplier / Farmer name" /></Field>
        <Field label={t("Batch Number")}><input value={form.batch} onChange={set("batch")} placeholder="Auto-generated if left empty" /></Field>
        <Field label={t("Date")}><input type="date" value={form.date} onChange={set("date")} /></Field>
        <Field label={t("Time")}><input type="time" value={form.time} onChange={set("time")} /></Field>
        <Field label={t("Item")}>
          <select value={form.item} onChange={set("item")}>
            <option value="Paddy">Paddy (நெல்)</option>
            <option value="Rice">Rice (அரிசி)</option>
            <option value="Broken Rice">Broken (நொய்)</option>
            <option value="Bran">Bran (தவிடு)</option>
            <option value="Husk Black Rice">Husk Black Rice</option>
            <option value="Jute Bag">Bag (Jute)</option>
            <option value="Plastic Bag">Bag (Plastic)</option>
            <option value="Husk">Husk (உமி, பதர்)</option>
            <option value="Old Iron">Old Iron (இரும்பு)</option>
            <option value="Corn">Corn (சோளம்)</option>
          </select>
        </Field>
        <Field label={t("Moisture Level (%)")}><input type="number" min="0" value={form.moisture} onChange={set("moisture")} placeholder="E.g. 14%" /></Field>
        <Field label={t("Gross Load (kg)")}><input type="number" min="0" value={form.grossLoad} onChange={set("grossLoad")} /></Field>
        <Field label={t("Empty Weight (kg)")}><input type="number" min="0" value={form.emptyWeight} onChange={set("emptyWeight")} /></Field>
        <Field label={t("Net Qty (kg)")}><input disabled value={form.netQty} className="input-disabled" /></Field>
        <Field label={t("Rate per unit")}><input type="number" min="0" value={form.rate} onChange={set("rate")} /></Field>
        <Field label={t("Total Value")}><input disabled value={fmtINR(form.totalValue)} className="input-disabled" /></Field>
        <Field label={t("Advance Payment")}><input type="number" min="0" value={form.advancePaid} onChange={set("advancePaid")} /></Field>
        <Field label={t("Balance Due")}><input disabled value={fmtINR(form.balance)} className="input-disabled" /></Field>
      </div>
      <div className="form-actions">
        <Button variant="secondary" onClick={onCancel}>{t("Cancel")}</Button>
        <Button onClick={() => onSave({ ...form, qty: form.netQty, cost: form.totalValue })}>{t("Save Purchase")}</Button>
      </div>
    </FormPage>
  );
}

function SalesModule({ data, processSale, t }) {
  const [form, setForm] = useState({ date: getToday(), customer: "", batch: "", qty: 1, price: 0 });
  const [message, setMessage] = useState(null);
  const finStock = (data.inventory || []).filter((i) => i.type === "Finished Good" && (i.qty || 0) > 0);
  const stockItem = finStock.find((f) => f.batch === form.batch);
  const total = Number(form.price || 0) * Number(form.qty || 0);

  const handleBatchSelect = (e) => {
    const batch = e.target.value;
    const match = finStock.find((f) => f.batch === batch);
    setForm({ ...form, batch, price: match && match.cost ? match.cost : form.price });
  };

  const handleCheckout = () => {
    setMessage(null);
    processSale({ id: nextId("invoices"), date: form.date, customer: form.customer, total, items: [{ batch: form.batch, qty: Number(form.qty) }] });
    setForm({ date: getToday(), customer: "", batch: "", qty: 1, price: 0 });
    setMessage({ type: "success", text: "Sales invoice generated and stock deducted." });
  };

  return (
    <div>
      <Card className="form-card" style={{marginTop: '16px'}}>
        <div className="form-grid">
          <Field label={t("Date")}><input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} /></Field>
          <Field label={t("Customer Name")}><input value={form.customer} onChange={(e) => setForm({ ...form, customer: e.target.value })} /></Field>
          <Field label={t("Finished Good Batch")}>
            <select value={form.batch} onChange={handleBatchSelect}>
              <option value="">Select Batch...</option>
              {finStock.map((f) => <option key={f.batch} value={f.batch}>{f.batch} — {f.item} (Avail: {f.qty})</option>)}
            </select>
          </Field>
          <Field label={t("Quantity")}><input type="number" min="1" max={stockItem ? stockItem.qty : undefined} value={form.qty} onChange={(e) => setForm({ ...form, qty: Number(e.target.value) })} /></Field>
          <Field label={t("Unit Price (₹)")}><input type="number" min="0" value={form.price} onChange={(e) => setForm({ ...form, price: Number(e.target.value) })} /></Field>
        </div>
        <p className="calc-total">{t("Invoice Total")}: <strong>{fmtINR(total)}</strong></p>
        {message && <p className={message.type === "error" ? "form-error" : "form-success"}>{message.text}</p>}
        <div className="form-actions">
          <Button onClick={handleCheckout}>{t("Complete Sale")}</Button>
        </div>
      </Card>
      <Card>
        <h3 className="card-title">{t("Recent Sales")}</h3>
        <Table
          columns={[
            { key: "id", label: "Invoice ID" }, { key: "date", label: t("Date") }, { key: "customer", label: t("Customer Name") },
            { key: "total", label: t("Total Value"), render: (r) => fmtINR(r.total) }
          ]}
          rows={data.invoices || []}
          emptyText="No sales yet."
        />
      </Card>
    </div>
  );
}

function Expenses({ data, update, remove, t }) {
  const [view, setView] = useState("list");
  if (view === "form") return <ExpenseForm onCancel={() => setView("list")} onSave={(form) => { update("expenses", form); setView("list"); }} t={t} />;

  return (
    <div>
      <PageHeader title={t("Expenses (Extra / Stationary / Medical / Travel)")} action={<Button icon={Plus} onClick={() => setView("form")}>{t("Add Expense")}</Button>} />
      <Card>
        <Table
          columns={[
            { key: "date", label: t("Date") }, { key: "category", label: "Category" }, { key: "desc", label: "Description" },
            { key: "amount", label: "Amount", render: (r) => fmtINR(r.amount) },
            { key: "actions", label: "", width: 60, render: (r) => <button className="icon-btn icon-btn-danger" onClick={() => remove("expenses", r.id)}><Trash2 size={15} /></button> }
          ]}
          rows={data.expenses || []}
          emptyText="No expenses recorded yet."
        />
      </Card>
    </div>
  );
}

function ExpenseForm({ onCancel, onSave, t }) {
  const [form, setForm] = useState({ date: getToday(), category: "Office", desc: "", amount: 0 });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  return (
    <FormPage title={t("Add Expense")} subtitle={t("Expenses")} onCancel={onCancel} t={t}>
      <div className="form-grid">
        <Field label={t("Date")}><input type="date" value={form.date} onChange={set("date")} /></Field>
        <Field label="Category">
          <select value={form.category} onChange={set("category")}>
            <option>Extra</option>
            <option>Office (Note / Bill / Stationary)</option>
            <option>Medical</option>
            <option>Travel Allowance</option>
            <option>AGS Home</option>
            <option>Machinery Maintenance</option>
          </select>
        </Field>
        <Field label="Amount"><input type="number" min="0" value={form.amount} onChange={set("amount")} /></Field>
        <Field label="Description" full><textarea value={form.desc} onChange={set("desc")} rows={3} placeholder="Details..." /></Field>
      </div>
      <div className="form-actions">
        <Button variant="secondary" onClick={onCancel}>{t("Cancel")}</Button>
        <Button onClick={() => onSave({ ...form, amount: Number(form.amount) })}>{t("Save")}</Button>
      </div>
    </FormPage>
  );
}

function Production({ data, setData, processProduction, t }) {
  const [tab, setTab] = useState("entry");
  const [view, setView] = useState("list");

  if (tab === "settings") {
    const s = data.productionSettings || { bagStock: 1000, bagVolume: 25 };
    return (
      <FormPage title={t("Settings")} subtitle="Bag stock & packaging volume" onCancel={() => setTab("entry")} t={t}>
        <div className="form-grid">
          <Field label="Bag Stock Available (Units)">
            <input type="number" min="0" value={s.bagStock} onChange={(e) => setData((prev) => ({ ...prev, productionSettings: { ...prev.productionSettings, bagStock: Number(e.target.value) } }))} />
          </Field>
          <Field label="Volume per Bag (kg)">
            <input type="number" min="1" value={s.bagVolume} onChange={(e) => setData((prev) => ({ ...prev, productionSettings: { ...prev.productionSettings, bagVolume: Number(e.target.value) } }))} />
          </Field>
        </div>
      </FormPage>
    );
  }

  if (view === "form") {
    return <ProductionForm data={data} onCancel={() => setView("list")} onSave={(form) => { processProduction(form); setView("list"); }} t={t} />;
  }

  return (
    <div>
      <PageHeader
        title={t("Production (White Ponni & By-Products)")}
        action={
          <div className="header-actions">
            <Button variant="secondary" onClick={() => setTab("settings")}>{t("Settings")}</Button>
            <Button icon={Plus} onClick={() => setView("form")}>{t("Log Production Run")}</Button>
          </div>
        }
      />
      <Card>
        <Table
          columns={[
            { key: "date", label: t("Date") }, 
            { key: "paddyVariety", label: t("Variety") }, 
            { key: "riceQty", label: t("White Ponni Rice (kg)"), render: r => `${r.riceQty} kg` },
            { key: "brokenQty", label: t("Broken Rice / Noy (kg)"), render: r => `${r.brokenQty || 0} kg` },
            { key: "branQty", label: t("Bran / Thavidu (kg)"), render: r => `${r.branQty || 0} kg` },
          ]}
          rows={data.production || []}
          emptyText="No production runs logged yet."
        />
      </Card>
    </div>
  );
}

function ProductionForm({ data, onCancel, onSave, t }) {
  const [form, setForm] = useState({
    date: getToday(), time: getTime(),
    paddyBatch: "", paddyVariety: "", paddyQty: 0,
    riceQty: 0, brokenQty: 0, branQty: 0, huskQty: 0,
    firewoodQty: 0, fuelQty: 0, juteBags: 0, plasticBags: 0, moisture: 0
  });

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const inventory = data.inventory || [];
  const paddyStock = inventory.filter((i) => i.type === "Raw Material" && (i.qty || 0) > 0);

  const handlePaddySelect = (e) => {
    const batch = e.target.value;
    const match = paddyStock.find((i) => i.batch === batch);
    setForm({ ...form, paddyBatch: batch, paddyVariety: match ? match.item : "", moisture: match && match.moisture ? match.moisture : 0 });
  };

  const inputPaddy = Number(form.paddyQty) || 0;
  const outputRice = Number(form.riceQty) || 0;
  const currentYieldPct = inputPaddy > 0 ? ((outputRice / inputPaddy) * 100).toFixed(1) : 0;

  return (
    <FormPage title={t("Log Mill Production")} subtitle={t("Production")} onCancel={onCancel} t={t}>
      <div className="form-grid">
        <Field label={t("Date")}><input type="date" value={form.date} onChange={set("date")} /></Field>
        <Field label={t("Paddy Batch (In)")}>
          <select value={form.paddyBatch} onChange={handlePaddySelect}>
            <option value="">Select Batch...</option>
            {paddyStock.map((r) => <option key={r.batch} value={r.batch}>{r.batch} — {r.item} (Avail: {r.qty} kg)</option>)}
          </select>
        </Field>
        <Field label={t("Variety")}><input disabled value={form.paddyVariety} className="input-disabled" /></Field>
        <Field label={t("Paddy Moisture (%)")}><input type="number" value={form.moisture} onChange={set("moisture")} /></Field>
        <Field label={t("Paddy Input Qty (kg)")}><input type="number" min="0" value={form.paddyQty} onChange={set("paddyQty")} /></Field>

        <div className="field-full highlight-text">{t("Production (White Ponni & By-Products)")}:</div>
        <Field label={t("White Ponni Rice (kg)")}><input type="number" min="0" value={form.riceQty} onChange={set("riceQty")} /></Field>
        <Field label={t("Broken Rice / Noy (kg)")}><input type="number" min="0" value={form.brokenQty} onChange={set("brokenQty")} /></Field>
        <Field label={t("Bran / Thavidu (kg)")}><input type="number" min="0" value={form.branQty} onChange={set("branQty")} /></Field>
        <Field label={t("Husk / Umi (kg)")}><input type="number" min="0" value={form.huskQty} onChange={set("huskQty")} /></Field>

        <div className="field-full highlight-text">{t("Viragu / Firewood (kg)")} & Misc:</div>
        <Field label={t("Viragu / Firewood (kg)")}><input type="number" min="0" value={form.firewoodQty} onChange={set("firewoodQty")} /></Field>
        <Field label={t("Fuel / Diesel (Liters)")}><input type="number" min="0" value={form.fuelQty} onChange={set("fuelQty")} /></Field>
        <Field label={t("Jute Bags")}><input type="number" min="0" value={form.juteBags} onChange={set("juteBags")} /></Field>
        <Field label={t("Plastic Bags")}><input type="number" min="0" value={form.plasticBags} onChange={set("plasticBags")} /></Field>
      </div>

      {inputPaddy > 0 && outputRice > 0 && (
        <div className={currentYieldPct >= 60 ? "form-success" : "form-error"} style={{marginTop: '20px'}}>
           <strong>Yield Analytics:</strong> Out-turn is {currentYieldPct}% 
        </div>
      )}

      <div className="form-actions">
        <Button variant="secondary" onClick={onCancel}>{t("Cancel")}</Button>
        <Button onClick={() => onSave(form)}>{t("Save & Update Inventory")}</Button>
      </div>
    </FormPage>
  );
}

function GodownHub({ data, update, remove, t }) {
  const [tab, setTab] = useState("Raw Material");
  const [path, setPath] = useState([]);
  const [view, setView] = useState("list");

  if (tab === "godowns") {
    if (view === "form") {
      return (
        <GodownForm 
          onCancel={() => setView("list")} 
          onSave={(form) => { update("godowns", form); setView("list"); }} 
          t={t} 
        />
      );
    }
    return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '10px' }}>
          <Tabs 
            tabs={[
              { key: "Raw Material", label: t("Raw Materials") }, 
              { key: "Finished Good", label: t("Finished Goods") },
              { key: "godowns", label: t("Godown List") }
            ]} 
            active={tab} 
            onChange={(k) => { setTab(k); setPath([]); setView("list"); }} 
          />
          <Button icon={Plus} onClick={() => setView("form")}>{t("Add Godown")}</Button>
        </div>
        <Card>
          <Table
            columns={[
              { key: "number", label: t("Godown No / Name") },
              { key: "location", label: t("Location") },
              { key: "desc", label: t("Description") },
              {
                key: "actions", label: "", width: 60,
                render: (r) => (
                  <button className="icon-btn icon-btn-danger" onClick={() => remove("godowns", r.id)}><Trash2 size={15} /></button>
                )
              }
            ]}
            rows={data.godowns || []}
            emptyText="No godowns added yet."
          />
        </Card>
      </div>
    );
  }

  const baseData = (data.inventory || []).filter((i) => i.type === tab);
  let displayData = [];
  let columns = [];
  let onRowClick = null;

  if (path.length === 0) {
    const categories = [...new Set(baseData.map((i) => i.category || "General"))];
    displayData = categories.map((c) => {
      const rows = baseData.filter((i) => (i.category || "General") === c);
      return { name: c, count: rows.length, totalQty: rows.reduce((s, i) => s + (i.qty || 0), 0) };
    });
    columns = [
      { key: "name", label: "Category" }, { key: "count", label: "Batches" }, { key: "totalQty", label: "Total Qty" },
      { key: "act", label: "", width: 36, render: () => <ChevronRight size={16} /> }
    ];
    onRowClick = (r) => setPath([r.name]);
  } else if (path.length === 1) {
    const items = [...new Set(baseData.filter((i) => (i.category || "General") === path[0]).map((i) => i.item))];
    displayData = items.map((it) => {
      const rows = baseData.filter((i) => i.item === it);
      return { name: it, count: rows.length, totalQty: rows.reduce((s, i) => s + (i.qty || 0), 0) };
    });
    columns = [
      { key: "name", label: "Variety / Item" }, { key: "count", label: "Batches" }, { key: "totalQty", label: "Total Qty" },
      { key: "act", label: "", width: 36, render: () => <ChevronRight size={16} /> }
    ];
    onRowClick = (r) => setPath([...path, r.name]);
  } else {
    displayData = baseData.filter((i) => (i.category || "General") === path[0] && i.item === path[1]);
    columns = [
      { key: "batch", label: t("Batch Number") }, { key: "qty", label: "Quantity" },
      { key: "cost", label: "Unit Cost", render: (r) => fmtINR(r.cost) }, { key: "id", label: "System ID" }
    ];
  }

  return (
    <div>
      <PageHeader title={t("Godown Stock Tracking")} subtitle={t("Drill down from category to batch")} />
      <Tabs 
        tabs={[
          { key: "Raw Material", label: t("Raw Materials") }, 
          { key: "Finished Good", label: t("Finished Goods") },
          { key: "godowns", label: t("Godown List") }
        ]} 
        active={tab} 
        onChange={(k) => { setTab(k); setPath([]); setView("list"); }} 
      />

      {path.length > 0 && (
        <div className="breadcrumb">
          <button className="crumb" onClick={() => setPath([])}>All</button>
          {path.map((p, idx) => (
            <React.Fragment key={p}>
              <span>/</span>
              <button className={`crumb ${idx === path.length - 1 ? "crumb-active" : ""}`} onClick={() => setPath(path.slice(0, idx + 1))}>{p}</button>
            </React.Fragment>
          ))}
        </div>
      )}

      <Card><Table columns={columns} rows={displayData} onRowClick={onRowClick} emptyText="No inventory recorded yet." /></Card>
    </div>
  );
}

function GodownForm({ onCancel, onSave, t }) {
  const [form, setForm] = useState({ number: "", location: "", desc: "" });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  return (
    <FormPage title={t("Add Godown")} subtitle={t("Godown List")} onCancel={onCancel} t={t}>
      <div className="form-grid">
        <Field label={t("Godown No / Name")}><input value={form.number} onChange={set("number")} placeholder="e.g. Godown 3 / Shed A" /></Field>
        <Field label={t("Location")}><input value={form.location} onChange={set("location")} placeholder="e.g. North Gate Side" /></Field>
        <Field label={t("Description")} full>
          <textarea value={form.desc} onChange={set("desc")} rows={3} placeholder="Storage details, capacity, or notes..." />
        </Field>
      </div>
      <div className="form-actions">
        <Button variant="secondary" onClick={onCancel}>{t("Cancel")}</Button>
        <Button onClick={() => onSave(form)}>{t("Save")}</Button>
      </div>
    </FormPage>
  );
}

function Reports({ data, t }) {
  const invoices = data.invoices || [];
  const procurement = data.procurement || [];
  const expenses = data.expenses || [];
  const production = data.production || [];

  const totalSales = invoices.reduce((s, i) => s + (i.total || 0), 0);
  const totalPurchases = procurement.reduce((s, p) => s + (p.totalValue || 0), 0);
  const totalExpenses = expenses.reduce((s, e) => s + Number(e.amount || 0), 0);
  const netProfit = totalSales - (totalPurchases + totalExpenses);
  const prodCount = production.length;
  const totalIn = production.reduce((s, p) => s + (Number(p.paddyQty) || 0), 0);

  return (
    <div>
      <PageHeader title={t("Reports & Analytics")} />
      <div className="grid stat-grid">
        <Card className="stat-card highlight"><div className="stat-icon tone-brown"><Activity size={20} /></div><div><div className="stat-value">{fmtINR(netProfit)}</div><div className="stat-label">{t("Net Profit")}</div></div></Card>
        <Card className="stat-card"><div className="stat-icon tone-green"><TrendingUp size={20} /></div><div><div className="stat-value">{fmtINR(totalSales)}</div><div className="stat-label">{t("Total Revenue")}</div></div></Card>
        <Card className="stat-card"><div className="stat-icon tone-amber"><Truck size={20} /></div><div><div className="stat-value">{fmtINR(totalPurchases)}</div><div className="stat-label">{t("Purchases")}</div></div></Card>
        <Card className="stat-card"><div className="stat-icon tone-red"><Receipt size={20} /></div><div><div className="stat-value">{fmtINR(totalExpenses)}</div><div className="stat-label">{t("Expenses")}</div></div></Card>
      </div>
      <Card>
        <h3 className="card-title">Production Analytics</h3>
        <div className="production-chart">
          <div className="chart-bar"><div className="fill in-fill" style={{ width: "100%" }} /><span>Input Paddy: {totalIn} kg across {prodCount} runs</span></div>
          <div className="chart-bar"><div className="fill out-fill" style={{ width: prodCount ? "68%" : "0%" }} /><span>Estimated Output Yield: 68%</span></div>
        </div>
      </Card>
    </div>
  );
}

function UserManagement({ data, update, remove, t }) {
  const [view, setView] = useState("list");
  const [editing, setEditing] = useState(null);

  if (view === "form") {
    return (
      <UserForm
        initial={editing}
        onCancel={() => { setEditing(null); setView("list"); }}
        onSave={(u) => { update("users", u); setEditing(null); setView("list"); }}
        t={t}
      />
    );
  }

  return (
    <div>
      <PageHeader title={t("System Users")} action={<Button icon={Plus} onClick={() => { setEditing(null); setView("form"); }}>{t("Add User")}</Button>} />
      <Card>
        <Table
          columns={[
            { key: "username", label: "Username" }, { key: "role", label: "Role" },
            { key: "status", label: "Status", render: (r) => <Badge tone={r.status === "Active" ? "green" : "red"}>{r.status}</Badge> },
            {
              key: "actions", label: "", width: 90,
              render: (r) => (
                <div className="row-actions">
                  <button className="icon-btn" onClick={() => { setEditing(r); setView("form"); }}><Pencil size={15} /></button>
                  <button className="icon-btn icon-btn-danger" onClick={() => remove("users", r.id)}><Trash2 size={15} /></button>
                </div>
              )
            }
          ]}
          rows={data.users || []}
          emptyText="No users added yet."
        />
      </Card>
    </div>
  );
}

function UserForm({ initial, onCancel, onSave, t }) {
  const [form, setForm] = useState(initial || { username: "", role: "Staff", status: "Active" });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  return (
    <FormPage title={initial ? "Edit User" : t("Add User")} subtitle={t("User Management")} onCancel={onCancel} t={t}>
      <div className="form-grid">
        <Field label="Username"><input value={form.username} onChange={set("username")} /></Field>
        <Field label="Role">
          <select value={form.role} onChange={set("role")}>
            <option>Super Admin</option><option>Admin</option><option>Manager</option><option>Accountant</option><option>Production Staff</option><option>Staff</option>
          </select>
        </Field>
        <Field label="Status"><select value={form.status} onChange={set("status")}><option>Active</option><option>Disabled</option></select></Field>
      </div>
      <div className="form-actions">
        <Button variant="secondary" onClick={onCancel}>{t("Cancel")}</Button>
        <Button onClick={() => onSave(form)}>Save</Button>
      </div>
    </FormPage>
  );
}

export default function RiceMillERP() {
  const [page, setPage] = useState("dashboard");
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const [isDark, setIsDark] = useState(true); 
  const [lang, setLang] = useState("en"); 
  
  const erpData = useERPData();
  const go = (key) => { setPage(key); setMobileOpen(false); };

  const t = (text) => {
    if (lang === "en") return text;
    return TRANSLATIONS[text] || text;
  };

  const PAGES = {
    dashboard: <Dashboard data={erpData.data} go={go} t={t} />,
    gatepass: <GatePass {...erpData} t={t} />,
    employees: <EmployeeHub {...erpData} t={t} />,
    expenses: <Expenses {...erpData} t={t} />,
    trade: <TradeHub {...erpData} t={t} />,
    production: <Production {...erpData} t={t} />,
    inventory: <GodownHub {...erpData} t={t} />,
    reports: <Reports data={erpData.data} t={t} />,
    users: <UserManagement {...erpData} t={t} />
  };

  const activeLabel = NAV.find((n) => n.key === page)?.label || "Dashboard";

  useEffect(() => {
    document.body.style.backgroundColor = isDark ? '#121212' : '#F3EBDD';
  }, [isDark]);

  return (
    <div className={`rm-app ${isDark ? 'theme-dark' : ''}`}>
      <style>{CSS}</style>
      {mobileOpen && <div className="backdrop" onClick={() => setMobileOpen(false)} />}
      <aside className={`sidebar ${mobileOpen ? "sidebar-open" : ""}`}>
        <div className="brand">
          <div className="brand-mark"><Wheat size={20} /></div>
          <div><div className="brand-title">Rice Mill ERP</div><div className="brand-sub">Operations Console</div></div>
          <button className="sidebar-close" onClick={() => setMobileOpen(false)}><X size={18} /></button>
        </div>
        <nav className="nav">
          {NAV.map((item) => (
            <button key={item.key} className={`nav-item ${page === item.key ? "nav-item-active" : ""}`} onClick={() => go(item.key)}>
              <item.icon size={17} /><span>{t(item.label)}</span>
            </button>
          ))}
        </nav>
      </aside>
      <div className="main">
        <header className="topbar">
          <button className="hamburger" onClick={() => setMobileOpen(true)}><Menu size={20} /></button>
          <div className="topbar-title">{t(activeLabel)}</div>
          <div className="topbar-user">
            
            <button 
              className="icon-btn toggle-btn" 
              onClick={() => setLang(lang === 'en' ? 'ta' : 'en')}
              style={{ marginRight: '8px', borderRadius: '50px', padding: '6px 12px', display: 'flex', gap: '6px', alignItems: 'center' }}
            >
              <Globe size={16} />
              <span style={{ fontSize: '13px', fontWeight: 600 }}>{lang === 'en' ? 'தமிழ்' : 'English'}</span>
            </button>

            <button 
              className="icon-btn toggle-btn" 
              onClick={() => setIsDark(!isDark)}
              style={{ marginRight: '14px', borderRadius: '50px', padding: '6px 12px', display: 'flex', gap: '6px', alignItems: 'center' }}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
              <span style={{ fontSize: '13px', fontWeight: 600 }}>{isDark ? 'Light' : 'Dark'}</span>
            </button>

            <div className="avatar">SA</div>
            <span className="user-name">Super Admin</span>
          </div>
        </header>
        <main className="content">{PAGES[page]}</main>
      </div>
    </div>
  );
}

const CSS = `
html, body, #root { 
  margin: 0 !important; 
  padding: 0 !important; 
  width: 100%; 
  height: 100%; 
  overflow-x: hidden; 
}

:root { 
  --bg: #F3EBDD; 
  --cream: #FBF7EF; 
  --card: #FFFFFF; 
  --border: #E7D9C2; 
  --brown: #8A5A34; 
  --brown-dark: #6E4526; 
  --brown-tint: #F1E1CC; 
  --ink: #3E2E20; 
  --ink-soft: #7A6653; 
  --green: #3E7A4C; 
  --green-tint: #E3F0E5; 
  --amber: #B4772A; 
  --amber-tint: #FBEBD4; 
  --red: #B14A3D; 
  --red-tint: #F8E4E0; 
  --radius: 14px; 
  --shadow: 0 2px 10px rgba(90,63,32,0.08); 
  --transition: all 0.3s ease;
}

.theme-dark {
  --bg: #121212; 
  --cream: #1e1e1e; 
  --card: #242424; 
  --border: #333333; 
  --brown: #D4A373; 
  --brown-dark: #FAEDCD; 
  --brown-tint: #3A2E24; 
  --ink: #E0E0E0; 
  --ink-soft: #9E9E9E; 
  --green: #4ADE80; 
  --green-tint: rgba(74, 222, 128, 0.15); 
  --amber: #FBBF24; 
  --amber-tint: rgba(251, 191, 36, 0.15); 
  --red: #F87171; 
  --red-tint: rgba(248, 113, 113, 0.15); 
  --shadow: 0 4px 12px rgba(0,0,0,0.5); 
}

* { box-sizing: border-box; }

h1, h2, h3, h4, h5, h6, p, span, label, div, th, td, button, input, select, textarea { margin: 0; color: var(--ink); transition: color 0.3s; }

.rm-app { display: flex; min-height: 100vh; width: 100%; background: var(--bg); color: var(--ink); font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; text-align: left !important; transition: var(--transition); }

.sidebar { width: 250px; flex-shrink: 0; background: var(--cream); border-right: 1px solid var(--border); display: flex; flex-direction: column; padding: 20px 14px; position: sticky; top: 0; height: 100vh; overflow-y: auto; transition: var(--transition); z-index: 10; }
.brand { display: flex; align-items: center; gap: 10px; padding: 6px 8px 20px; position: relative; }
.brand-mark { width: 36px; height: 36px; border-radius: 10px; background: var(--brown); color: #fff !important; display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: var(--transition); }
.brand-title { font-weight: 700; font-size: 14.5px; line-height: 1.2; }
.brand-sub { font-size: 11.5px; color: var(--ink-soft); }
.sidebar-close { display: none; margin-left: auto; background: none; border: none; color: var(--ink-soft); cursor: pointer; }
.nav { display: flex; flex-direction: column; gap: 2px; }
.nav-item { display: flex; align-items: center; gap: 11px; padding: 10px 12px; border: none; background: transparent; border-radius: 10px; color: var(--ink-soft) !important; font-size: 13.6px; font-weight: 500; cursor: pointer; transition: var(--transition); }
.nav-item:hover { background: var(--brown-tint); color: var(--brown-dark) !important; }

.nav-item-active { background: var(--brown); color: #fff !important; }
.nav-item-active span { color: #fff !important; }
.theme-dark .nav-item-active { background: var(--brown); color: #121212 !important; }
.theme-dark .nav-item-active span { color: #121212 !important; }

.backdrop { display: none; }

.main { flex: 1; min-width: 0; display: flex; flex-direction: column; }
.topbar { display: flex; align-items: center; gap: 14px; padding: 14px 24px; background: var(--card); border-bottom: 1px solid var(--border); position: sticky; top: 0; z-index: 5; transition: var(--transition); }
.hamburger { display: none; background: none; border: none; color: var(--ink); cursor: pointer; }
.topbar-title { font-weight: 700; font-size: 16px; }
.topbar-user { display: flex; align-items: center; margin-left: auto; }
.avatar { width: 34px; height: 34px; border-radius: 50%; background: var(--brown-tint); color: var(--brown-dark); display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; flex-shrink: 0; transition: var(--transition); }
.user-name { font-size: 13px; margin-left: 8px; font-weight: 600; white-space: nowrap; }

.content { padding: 22px 24px 60px; max-width: 1280px; width: 100%; }
.page-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; margin-bottom: 18px; flex-wrap: wrap; }
.page-header h1 { font-size: 21px; margin: 0 0 4px; font-weight: 700; }
.page-header p { margin: 0; color: var(--ink-soft); font-size: 13.5px; }
.header-actions { display: flex; gap: 10px; flex-wrap: wrap; }

.card { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); box-shadow: var(--shadow); padding: 18px; margin-bottom: 18px; transition: var(--transition); }
.card-title { margin: 0 0 14px; font-size: 14.5px; font-weight: 700; display: flex; align-items: center; gap: 6px; }
.title-icon { color: var(--amber); }

.btn { display: inline-flex; align-items: center; justify-content: center; gap: 7px; border-radius: 10px; font-weight: 600; cursor: pointer; border: 1px solid transparent; white-space: nowrap; transition: var(--transition); }
.btn-md { padding: 10px 16px; font-size: 13.5px; }
.btn-sm { padding: 6px 10px; font-size: 12px; }

.btn-primary { background: var(--brown); color: #fff !important; }
.theme-dark .btn-primary { color: #121212 !important; }
.btn-primary:hover { filter: brightness(1.1); }

.btn-secondary { background: var(--bg); color: var(--ink) !important; border-color: var(--border); }
.btn-secondary:hover { background: var(--brown-tint); }
.btn-ghost { background: transparent; color: var(--brown-dark) !important; border-color: transparent; padding: 8px 4px; }
.btn-ghost:hover { text-decoration: underline; }
.btn:disabled { opacity: .5; cursor: not-allowed; }

.icon-btn { border: 1px solid var(--border); background: var(--cream); border-radius: 8px; padding: 6px; cursor: pointer; color: var(--ink-soft); display: inline-flex; transition: var(--transition); }
.icon-btn:hover { color: var(--brown-dark); border-color: var(--brown); }
.icon-btn-danger:hover { color: var(--red); border-color: var(--red); }
.toggle-btn:hover { background: var(--brown-tint); }

.row-actions { display: flex; gap: 6px; align-items: center; flex-wrap: wrap; }

.badge { padding: 4px 10px; border-radius: 100px; font-size: 11.5px; font-weight: 700; display: inline-block; transition: var(--transition); }
.badge-green { background: var(--green-tint); color: var(--green) !important; }
.badge-amber { background: var(--amber-tint); color: var(--amber) !important; }
.badge-red { background: var(--red-tint); color: var(--red) !important; }
.badge-neutral { background: var(--brown-tint); color: var(--brown-dark) !important; }

.table-scroll { width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; }
.data-table { width: 100%; border-collapse: collapse; font-size: 13px; min-width: 560px; }
.data-table th { padding: 10px 12px; color: var(--ink-soft); font-size: 11.5px; text-transform: uppercase; border-bottom: 1px solid var(--border); transition: var(--transition); }
.data-table td { padding: 12px; border-bottom: 1px solid var(--border); transition: var(--transition); }
.data-table tbody tr:hover { background: var(--bg); }
.data-table tbody tr:last-child td { border-bottom: none; }
.empty-state { padding: 40px 20px; color: var(--ink-soft); font-size: 14px; display: flex; flex-direction: column; align-items: center; gap: 10px; }

.tabs { display: flex; gap: 4px; margin-bottom: 16px; background: var(--cream); padding: 4px; border-radius: 10px; width: fit-content; max-width: 100%; overflow-x: auto; border: 1px solid var(--border); transition: var(--transition); }
.tab { border: none; background: transparent; padding: 8px 16px; border-radius: 8px; font-size: 13px; font-weight: 600; color: var(--ink-soft); cursor: pointer; white-space: nowrap; transition: var(--transition); }

.tab-active { background: var(--brown); color: #fff !important; }
.theme-dark .tab-active { color: #121212 !important; }

.form-card { max-width: 760px; }
.form-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
.field { display: flex; flex-direction: column; gap: 6px; font-size: 12.5px; font-weight: 600; color: var(--ink-soft); }
.field input, .field select, .field textarea { font-family: inherit; border: 1px solid var(--border); background: var(--cream); border-radius: 9px; padding: 10px 11px; font-size: 13.5px; color: var(--ink); outline: none; transition: var(--transition); }
.field input:focus, .field select:focus, .field textarea:focus { border-color: var(--brown); background: var(--card); }
.field textarea { resize: vertical; }
.field-full { grid-column: 1 / -1; }

.input-disabled { background: var(--bg) !important; color: var(--ink-soft) !important; cursor: not-allowed; opacity: 0.8; }

.form-actions { display: flex; justify-content: flex-end; gap: 10px; margin-top: 20px; flex-wrap: wrap; }
.form-hint { margin: 12px 0 0; font-size: 12.5px; color: var(--amber); }
.form-error { margin: 12px 0 0; font-size: 13px; color: var(--red); background: var(--red-tint); padding: 9px 12px; border-radius: 8px; }
.form-success { margin: 12px 0 0; font-size: 13px; color: var(--green); background: var(--green-tint); padding: 9px 12px; border-radius: 8px; }
.calc-total { margin: 14px 0 0; font-size: 13.5px; color: var(--ink-soft); }
.calc-total strong { color: var(--brown-dark); font-size: 15px; }

.highlight-text { font-weight: bold; margin-top: 10px; color: var(--brown) !important; }

.search-row { display: flex; align-items: center; gap: 8px; background: var(--cream); border: 1px solid var(--border); border-radius: 10px; padding: 8px 12px; max-width: 320px; color: var(--ink-soft); transition: var(--transition); }
.search-row input { border: none; background: transparent; outline: none; font-size: 13.5px; width: 100%; color: var(--ink); }

.breadcrumb { display: flex; flex-wrap: wrap; gap: 6px; align-items: center; margin-bottom: 14px; font-size: 13px; color: var(--ink-soft); }
.crumb { background: var(--cream); border: 1px solid var(--border); padding: 5px 10px; border-radius: 8px; cursor: pointer; color: var(--ink-soft); font-size: 12.5px; transition: var(--transition); }
.crumb-active { background: var(--brown-tint); color: var(--brown-dark) !important; font-weight: 700; }

.grid { display: grid; gap: 16px; }
.stat-grid { grid-template-columns: repeat(4, 1fr); margin-bottom: 18px; }
.stat-card { display: flex; align-items: center; gap: 12px; margin-bottom: 0; }
.stat-card.highlight { background: var(--brown-tint); }
.stat-icon { width: 42px; height: 42px; border-radius: 11px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: var(--transition); }
.tone-brown { background: var(--brown-tint); color: var(--brown-dark); }
.tone-green { background: var(--green-tint); color: var(--green); }
.tone-amber { background: var(--amber-tint); color: var(--amber); }
.tone-red { background: var(--red-tint); color: var(--red); }
.stat-value { font-size: 18px; font-weight: 700; }
.stat-label { font-size: 12px; color: var(--ink-soft); }

.dashboard-grid { 
  display: grid; 
  grid-template-columns: 1.8fr 1fr; 
  align-items: start; 
}
.dashboard-table-card { grid-column: 1; overflow-x: auto; }
.dashboard-right-col { display: flex; flex-direction: column; gap: 16px; }

.low-stock-panel { display: flex; flex-direction: column; gap: 10px; }
.low-stock-item { display: flex; align-items: center; justify-content: space-between; padding: 12px; background: var(--amber-tint); border-radius: 10px; border: 1px solid var(--border); gap: 10px; transition: var(--transition); }
.ls-info { display: flex; flex-direction: column; gap: 4px; font-size: 13px; }

.quick-actions { display: flex; flex-direction: column; gap: 8px; }
.quick-action { display: flex; align-items: center; justify-content: space-between; padding: 11px 14px; border-radius: 10px; border: 1px solid var(--border); background: var(--cream); color: var(--ink); font-weight: 600; font-size: 13px; cursor: pointer; transition: var(--transition); }
.quick-action:hover { background: var(--brown-tint); border-color: var(--brown); }

.payroll-summary { padding: 16px; background: var(--cream); border-radius: 10px; border: 1px dashed var(--border); font-size: 13.5px; display: flex; flex-direction: column; gap: 8px; margin-top: 16px; transition: var(--transition); }

.production-chart { display: flex; flex-direction: column; gap: 16px; padding: 20px 0; }
.chart-bar { width: 100%; background: var(--cream); border-radius: 8px; height: 32px; position: relative; overflow: hidden; display: flex; align-items: center; transition: var(--transition); }
.chart-bar span { position: absolute; left: 16px; font-size: 12px; font-weight: bold; z-index: 2; }
.theme-dark .chart-bar span { color: #121212 !important; }
.fill { height: 100%; position: absolute; left: 0; top: 0; z-index: 1; border-radius: 8px; }
.in-fill { background: var(--amber-tint); border: 1px solid var(--amber); }
.out-fill { background: var(--green-tint); border: 1px solid var(--green); }

@media (max-width: 980px){
  .stat-grid { grid-template-columns: repeat(2,1fr); }
  .dashboard-grid { grid-template-columns: 1fr; }
  .dashboard-table-card { grid-column: auto; }
  .form-grid { grid-template-columns: 1fr; }
  .form-grid .field-full { grid-column: 1; }
}

@media (max-width: 860px){
  .sidebar { position: fixed; left: 0; top: 0; z-index: 40; transform: translateX(-100%); height: 100vh; }
  .sidebar-open { transform: translateX(0); box-shadow: 8px 0 24px rgba(0,0,0,0.5); }
  .sidebar-close { display: inline-flex; }
  .hamburger { display: inline-flex; }
  .backdrop { display: block; position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 30; }
  .content { padding: 16px 12px 50px; }
  .topbar { padding: 12px 16px; }
}

@media (max-width: 600px){
  .stat-grid { grid-template-columns: 1fr 1fr; gap: 10px; }
  .card { padding: 14px; }
  .page-header { flex-direction: column; align-items: stretch; gap: 12px; }
  .page-header h1 { font-size: 18px; }
  .header-actions { justify-content: stretch; width: 100%; }
  .header-actions .btn { flex: 1; justify-content: center; }
  .tabs { width: 100%; flex-wrap: nowrap; overflow-x: auto; }
  .tab { flex: 1; text-align: center; padding: 8px 6px; font-size: 12px; justify-content: center; min-width: max-content; }
  .user-name { display: none; }
  .search-row { max-width: 100%; width: 100%; margin-bottom: 16px !important; }
  .payroll-header-mobile { display: flex; flex-direction: column; gap: 12px; margin-bottom: 16px; }
}

@media (max-width: 420px){
  .stat-grid { grid-template-columns: 1fr; }
  .form-actions { flex-direction: column; align-items: stretch; }
  .form-actions .btn { width: 100%; margin: 0; justify-content: center; }
}
`;