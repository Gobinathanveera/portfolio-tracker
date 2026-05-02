import { useState, useMemo, useEffect } from 'react';
import {
  PieChart, Pie, Cell, LineChart, Line, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import {
  TrendingUp, TrendingDown, Activity, DollarSign,
  Briefcase, AlertCircle, Eye, EyeOff, CheckCircle,
  LayoutDashboard, FolderOpen, Plus, Edit2, Trash2, X, RefreshCw
} from 'lucide-react';

const COLORS = ['#1E3A8A', '#14B8A6', '#F59E0B', '#8B5CF6', '#EC4899', '#64748B'];

const getThirtyDaysAgo = () => {
  const d = new Date();
  d.setDate(d.getDate() - 30);
  return d.toISOString().split('T')[0];
};

const genId = () => Math.random().toString(36).substr(2, 9);

const defaultData = [
  { 
    type: 'Stocks', 
    history: [{ date: getThirtyDaysAgo(), value: 5851.99 }, { date: new Date().toISOString().split('T')[0], value: 5775.80 }],
    holdings: [
      { id: genId(), name: 'South Indian Bank', ticker: 'NSE:SOUTHBANK', units: 70, avgBuyPrice: 34.87, cmp: 33.50 },
      { id: genId(), name: 'ITC', ticker: 'NSE:ITC', units: 3, avgBuyPrice: 345.00, cmp: 350.00 },
      { id: genId(), name: 'HDFCPVTBAN', ticker: 'NSE:HDFCBANK', units: 25, avgBuyPrice: 27.39, cmp: 26.00 },
      { id: genId(), name: 'IRFC', ticker: 'NSE:IRFC', units: 5, avgBuyPrice: 184.10, cmp: 180.00 },
      { id: genId(), name: 'BEL', ticker: 'NSE:BEL', units: 2, avgBuyPrice: 385.11, cmp: 390.00 }
    ]
  },
  { 
    type: 'ETF', 
    history: [{ date: getThirtyDaysAgo(), value: 2564.60 }, { date: new Date().toISOString().split('T')[0], value: 2355.85 }],
    holdings: [
      { id: genId(), name: 'BHARATAT022', ticker: 'NSE:ICICIB22', units: 4, avgBuyPrice: 714.28, cmp: 700.00 },
      { id: genId(), name: 'NETFIT', ticker: 'NSE:NETFIT', units: 10, avgBuyPrice: 26.58, cmp: 25.00 },
      { id: genId(), name: 'MON100', ticker: 'NSE:MON100', units: 5, avgBuyPrice: 141.28, cmp: 135.00 },
      { id: genId(), name: 'GOLDBEES', ticker: 'NSE:GOLDBEES', units: 5, avgBuyPrice: 57.88, cmp: 60.00 },
      { id: genId(), name: 'JUNIORBEES', ticker: 'NSE:JUNIORBEES', units: 1, avgBuyPrice: 562.90, cmp: 550.00 }
    ]
  },
  { 
    type: 'Mutual Fund', 
    history: [{ date: getThirtyDaysAgo(), value: 15300.00 }, { date: new Date().toISOString().split('T')[0], value: 15657.00 }],
    holdings: [
      { id: genId(), name: 'Motilal Oswal Nifty India Defense', units: 1, avgBuyPrice: 4000.00, cmp: 4150.00 },
      { id: genId(), name: 'Navi Nifty 50 Index Fund', units: 1, avgBuyPrice: 3400.00, cmp: 3450.00 },
      { id: genId(), name: 'Kotak Energy Opportunities Fund', units: 1, avgBuyPrice: 1200.00, cmp: 1220.00 },
      { id: genId(), name: 'Bandhan Small Cap Fund', units: 1, avgBuyPrice: 1200.00, cmp: 1250.00 },
      { id: genId(), name: 'HDFC Mid Cap Fund', units: 1, avgBuyPrice: 1400.00, cmp: 1420.00 },
      { id: genId(), name: 'HDFC Silver ETF FoF', units: 1, avgBuyPrice: 600.00, cmp: 610.00 },
      { id: genId(), name: 'Motilal Oswal Midcap Fund', units: 1, avgBuyPrice: 500.00, cmp: 520.00 },
      { id: genId(), name: 'Axis Liquid Fund', units: 1, avgBuyPrice: 2000.00, cmp: 2010.00 }
    ]
  },
  {
    type: 'EPF',
    history: [],
    holdings: [
      { id: genId(), name: 'Mar/2025', employee: 1800, employer: 550, pension: 1250 },
      { id: genId(), name: 'Apr/2025', employee: 1684, employer: 515, pension: 1169 },
      { id: genId(), name: 'May/2025', employee: 1800, employer: 550, pension: 1250 },
      { id: genId(), name: 'Jun/2025', employee: 1626, employer: 497, pension: 1129 },
      { id: genId(), name: 'Jul/2025', employee: 900, employer: 275, pension: 625 },
      { id: genId(), name: 'Aug/2025', employee: 1103, employer: 337, pension: 766 },
      { id: genId(), name: 'Sep/2025', employee: 1626, employer: 497, pension: 1129 },
      { id: genId(), name: 'Oct/2025', employee: 1560, employer: 477, pension: 1083 },
      { id: genId(), name: 'Nov/2025', employee: 1568, employer: 480, pension: 1088 },
      { id: genId(), name: 'Dec/2025', employee: 1560, employer: 477, pension: 1083 },
      { id: genId(), name: 'Jan/2026', employee: 1684, employer: 515, pension: 1169 },
      { id: genId(), name: 'Feb/2026', employee: 1800, employer: 550, pension: 1250 },
      { id: genId(), name: 'Mar/2026', employee: 1800, employer: 550, pension: 1250 },
      { id: genId(), name: 'Apr/2026', employee: 1800, employer: 550, pension: 1250 }
    ]
  },
  {
    type: 'PPF',
    history: [],
    holdings: [
      { id: genId(), name: '12-12-2024', amount: 500 },
      { id: genId(), name: '08-08-2025', amount: 1000 },
      { id: genId(), name: '08-08-2025', amount: 1000 },
      { id: genId(), name: '12-08-2025', amount: 1000 },
      { id: genId(), name: '12-09-2025', amount: 1000 },
      { id: genId(), name: '12-10-2025', amount: 1000 },
      { id: genId(), name: '12-11-2025', amount: 1000 },
      { id: genId(), name: '12-12-2025', amount: 1000 },
      { id: genId(), name: '12-01-2026', amount: 1000 },
      { id: genId(), name: '12-02-2026', amount: 1000 },
      { id: genId(), name: '12-03-2026', amount: 1000 },
      { id: genId(), name: '12-04-2026', amount: 1000 }
    ]
  }
];

const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 2
  }).format(value || 0);
};

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  if (percent < 0.03) return null;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight="bold" style={{ textShadow: '0px 1px 3px rgba(0,0,0,0.8)' }}>
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  );
};

export default function App() {
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('myPortfolioData_v9');
    if (saved) {
      try { 
        const parsed = JSON.parse(saved);
        return parsed.filter(item => item.type !== 'Investment Journey');
      } catch (e) { console.error(e); }
    }
    return defaultData;
  });

  useEffect(() => {
    localStorage.setItem('myPortfolioData_v9', JSON.stringify(data));
  }, [data]);

  const [activeView, setActiveView] = useState('Dashboard');
  const [sortConfig, setSortConfig] = useState({ key: 'current', direction: 'desc' });
  const [showCharts, setShowCharts] = useState(true);
  const [toast, setToast] = useState(null);
  const [selectedLineChartType, setSelectedLineChartType] = useState('All');
  const [isSyncing, setIsSyncing] = useState(false);

  // Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [editingHoldingId, setEditingHoldingId] = useState(null);
  const [formData, setFormData] = useState({ name: '', ticker: '', units: '', avgBuyPrice: '', cmp: '' });

  const showToast = (msg, type = 'success') => {
    setToast({ message: msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const fetchLivePrices = async () => {
    setIsSyncing(true);
    const todayStr = new Date().toISOString().split('T')[0];
    
    const allTickers = [];
    data.forEach(item => {
      if (item.type !== 'Mutual Fund') {
        item.holdings.forEach(h => {
          if (h.ticker) allTickers.push(h.ticker);
        });
      }
    });

    if (allTickers.length === 0) {
      showToast('No ticker symbols defined for any asset', 'error');
      setIsSyncing(false);
      return;
    }

    try {
      const apiUrl = `http://${window.location.hostname}:3001/api/live-prices?tickers=${allTickers.join(',')}`;
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error('Network error');
      const livePrices = await response.json();

      let updatedCount = 0;
      
      setData(prevData => {
        return prevData.map(item => {
          if (item.type === 'Mutual Fund') return item;
          
          let modified = false;
          let updatedHoldings = item.holdings.map(h => {
            if (h.ticker && livePrices[h.ticker]) {
              if (h.cmp !== livePrices[h.ticker]) {
                modified = true;
                updatedCount++;
                return { ...h, cmp: livePrices[h.ticker] };
              }
            }
            return h;
          });

          if (modified) {
            const newCurrentTotal = updatedHoldings.reduce((sum, h) => sum + (h.units * h.cmp), 0);
            const newHistory = [...item.history];
            const existingIndex = newHistory.findIndex(h => h.date === todayStr);
            if (existingIndex >= 0) newHistory[existingIndex].value = newCurrentTotal;
            else {
              newHistory.push({ date: todayStr, value: newCurrentTotal });
              newHistory.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
            }
            return { ...item, holdings: updatedHoldings, history: newHistory };
          }
          return item;
        });
      });

      if (updatedCount > 0) {
        showToast(`Successfully synced ${updatedCount} live prices!`, 'success');
      } else {
        showToast(`All prices are already up to date!`, 'success');
      }
    } catch (err) {
      showToast('Failed to fetch live prices. Ensure backend is running.', 'error');
      console.error(err);
    } finally {
      setIsSyncing(false);
    }
  };

  // Compute live values from holdings array dynamically
  const computedData = useMemo(() => {
    return data.map(item => {
      const holdings = item.holdings || [];
      let invested = 0;
      let current = 0;
      let ledgerData = [];

      if (item.type === 'EPF') {
        const rate = 8.25 / 100;
        let cumulativeBalance = 0;
        let totalPension = 0;

        ledgerData = holdings.map((h, i) => {
          const emp = Number(h.employee) || 0;
          const emplyr = Number(h.employer) || 0;
          const pen = Number(h.pension) || 0;
          
          const monthContribution = emp + emplyr;
          invested += monthContribution + pen;
          totalPension += pen;

          cumulativeBalance += monthContribution;
          const interest = cumulativeBalance * (rate / 12);
          cumulativeBalance += interest;

          const currentValue = cumulativeBalance + totalPension;

          return { ...h, invested: monthContribution + pen, currentValue, balance: cumulativeBalance, interest };
        });
        
        current = cumulativeBalance + totalPension;
      } else if (item.type === 'PPF') {
        const rate = 7.1 / 100;
        let cumulativeBalance = 0;

        ledgerData = holdings.map((h, i) => {
          const amount = Number(h.amount) || 0;
          invested += amount;
          
          cumulativeBalance += amount;
          const interest = cumulativeBalance * (rate / 12);
          cumulativeBalance += interest;

          return { ...h, invested: amount, currentValue: cumulativeBalance, balance: cumulativeBalance, interest };
        });
        
        current = cumulativeBalance;
      } else {
        invested = holdings.reduce((sum, h) => sum + (h.units * h.avgBuyPrice), 0);
        current = holdings.reduce((sum, h) => sum + (h.units * h.cmp), 0);
      }

      const sortedHistory = [...item.history].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
      const currentEntry = sortedHistory[sortedHistory.length - 1] || { value: invested, date: null };
      const previousEntry = sortedHistory.length > 1 ? sortedHistory[sortedHistory.length - 2] : null;
      
      let dailyChange = 0; let dailyChangePercent = 0;
      if (previousEntry && item.type !== 'EPF' && item.type !== 'PPF') {
        dailyChange = current - previousEntry.value;
        dailyChangePercent = (dailyChange / previousEntry.value) * 100;
      }

      return {
        ...item,
        invested,
        current: current > 0 ? current : currentEntry.value,
        lastUpdated: currentEntry.date,
        dailyChange,
        dailyChangePercent,
        ledgerData // Store computed ledger for EPF/PPF
      };
    });
  }, [data]);

  const totalInvested = useMemo(() => computedData.reduce((sum, item) => sum + item.invested, 0), [computedData]);
  const totalCurrent = useMemo(() => computedData.reduce((sum, item) => sum + item.current, 0), [computedData]);
  const totalProfit = totalCurrent - totalInvested;
  const totalProfitPercent = totalInvested > 0 ? (totalProfit / totalInvested) * 100 : 0;

  const filteredData = useMemo(() => {
    let result = [...computedData];
    if (sortConfig.key) {
      result.sort((a, b) => {
        let aValue = a[sortConfig.key]; let bValue = b[sortConfig.key];
        if (sortConfig.key === 'profit') {
          aValue = a.current - a.invested; bValue = b.current - b.invested;
        } else if (sortConfig.key === 'percentChange') {
          aValue = ((a.current - a.invested) / a.invested); bValue = ((b.current - b.invested) / b.invested);
        }
        if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }
    return result;
  }, [computedData, sortConfig]);

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') direction = 'desc';
    setSortConfig({ key, direction });
  };

  const historicalData = useMemo(() => {
    if (selectedLineChartType === 'All') {
      const dateMap = {};
      data.forEach(item => {
        item.history.forEach(h => {
          if (!dateMap[h.date]) dateMap[h.date] = 0;
          dateMap[h.date] += h.value;
        });
      });
      return Object.entries(dateMap).map(([date, value]) => ({ date, value })).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    } else {
      const item = data.find(i => i.type === selectedLineChartType);
      return item ? [...item.history].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()) : [];
    }
  }, [data, selectedLineChartType]);

  const pieData = computedData.map(item => ({ name: item.type, value: item.current }));
  const barData = computedData.map(item => ({ name: item.type, Invested: item.invested, Current: item.current }));

  // Modal Handlers
  const openModal = (categoryType, holding = null) => {
    setEditingCategory(categoryType);
    if (categoryType === 'EPF') {
      if (holding) {
        setEditingHoldingId(holding.id);
        setFormData({ name: holding.name, employee: holding.employee, employer: holding.employer, pension: holding.pension, ticker: '', units: '', avgBuyPrice: '', cmp: '' });
      } else {
        setEditingHoldingId(null);
        setFormData({ name: '', employee: '', employer: '', pension: '', ticker: '', units: '', avgBuyPrice: '', cmp: '' });
      }
    } else if (categoryType === 'PPF') {
      if (holding) {
        setEditingHoldingId(holding.id);
        setFormData({ name: holding.name, employee: '', employer: '', pension: '', ticker: '', units: '', avgBuyPrice: holding.amount, cmp: '' });
      } else {
        setEditingHoldingId(null);
        setFormData({ name: '', employee: '', employer: '', pension: '', ticker: '', units: '', avgBuyPrice: '', cmp: '' });
      }
    } else {
      if (holding) {
        setEditingHoldingId(holding.id);
        setFormData({ name: holding.name, ticker: holding.ticker || '', units: holding.units, avgBuyPrice: holding.avgBuyPrice, cmp: holding.cmp });
      } else {
        setEditingHoldingId(null);
        setFormData({ name: '', ticker: '', units: categoryType === 'Mutual Fund' ? '1' : '', avgBuyPrice: '', cmp: '' });
      }
    }
    setIsModalOpen(true);
  };

  const handleSaveHolding = (e) => {
    e.preventDefault();
    const isMutualFund = editingCategory === 'Mutual Fund';
    const isEpf = editingCategory === 'EPF';
    const isPpf = editingCategory === 'PPF';

    if (isEpf) {
      if (!formData.name || !formData.employee || !formData.employer || !formData.pension) {
        showToast('Please fill all required fields', 'error');
        return;
      }
    } else if (isPpf) {
      if (!formData.name || !formData.avgBuyPrice) {
        showToast('Please fill all required fields', 'error');
        return;
      }
    } else if (!formData.name || !formData.avgBuyPrice || (isMutualFund && !formData.cmp) || (!isMutualFund && !formData.units)) {
      showToast('Please fill all required fields', 'error');
      return;
    }
    
    const todayStr = new Date().toISOString().split('T')[0];

    setData(prevData => {
      return prevData.map(item => {
        if (item.type === editingCategory) {
          let updatedHoldings = [...item.holdings];
          
          if (isEpf) {
            if (editingHoldingId) {
              updatedHoldings = updatedHoldings.map(h => 
                h.id === editingHoldingId 
                ? { ...h, name: formData.name, employee: Number(formData.employee), employer: Number(formData.employer), pension: Number(formData.pension) }
                : h
              );
            } else {
              updatedHoldings.push({
                id: genId(), name: formData.name, employee: Number(formData.employee), employer: Number(formData.employer), pension: Number(formData.pension)
              });
            }
            return { ...item, holdings: updatedHoldings };
          }

          if (isPpf) {
            if (editingHoldingId) {
              updatedHoldings = updatedHoldings.map(h => 
                h.id === editingHoldingId 
                ? { ...h, name: formData.name, amount: Number(formData.avgBuyPrice) }
                : h
              );
            } else {
              updatedHoldings.push({
                id: genId(), name: formData.name, amount: Number(formData.avgBuyPrice)
              });
            }
            return { ...item, holdings: updatedHoldings };
          }

          
          const finalUnits = isMutualFund ? 1 : Number(formData.units);
          const finalCmp = isMutualFund ? Number(formData.cmp) : (Number(formData.cmp) || 0);
          
          if (editingHoldingId) {
            updatedHoldings = updatedHoldings.map(h => 
              h.id === editingHoldingId 
              ? { ...h, name: formData.name, ticker: formData.ticker, units: finalUnits, avgBuyPrice: Number(formData.avgBuyPrice), cmp: finalCmp }
              : h
            );
          } else {
            updatedHoldings.push({
              id: genId(), name: formData.name, ticker: formData.ticker, units: finalUnits, avgBuyPrice: Number(formData.avgBuyPrice), cmp: finalCmp
            });
          }

          const newCurrentTotal = updatedHoldings.reduce((sum, h) => sum + (h.units * h.cmp), 0);
          const newHistory = [...item.history];
          const existingIndex = newHistory.findIndex(h => h.date === todayStr);
          if (existingIndex >= 0) newHistory[existingIndex].value = newCurrentTotal;
          else {
            newHistory.push({ date: todayStr, value: newCurrentTotal });
            newHistory.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
          }

          return { ...item, holdings: updatedHoldings, history: newHistory };
        }
        return item;
      });
    });

    setIsModalOpen(false);
    showToast(editingHoldingId ? 'Asset updated successfully!' : 'New asset added!');
  };

  const handleDeleteHolding = (categoryType, id) => {
    if (!window.confirm("Are you sure you want to delete this asset?")) return;
    const todayStr = new Date().toISOString().split('T')[0];

    setData(prevData => {
      return prevData.map(item => {
        if (item.type === categoryType) {
          const updatedHoldings = item.holdings.filter(h => h.id !== id);
          const newCurrentTotal = updatedHoldings.reduce((sum, h) => sum + (h.units * h.cmp), 0);
          const newHistory = [...item.history];
          const existingIndex = newHistory.findIndex(h => h.date === todayStr);
          if (existingIndex >= 0) newHistory[existingIndex].value = newCurrentTotal;
          else {
            newHistory.push({ date: todayStr, value: newCurrentTotal });
            newHistory.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
          }
          return { ...item, holdings: updatedHoldings, history: newHistory };
        }
        return item;
      });
    });
    showToast('Asset deleted!');
  };

  const renderNavigationTabs = () => (
    <div className="flex flex-wrap gap-2 mb-6">
      <button onClick={() => setActiveView('Dashboard')} className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors flex items-center gap-2 shadow-sm ${activeView === 'Dashboard' ? 'bg-blue-600 text-white' : 'bg-slate-900/40 backdrop-blur-md text-slate-300 border border-slate-700/50 hover:bg-slate-800/30 backdrop-blur-sm hover:text-blue-600'}`}>
        <LayoutDashboard className="w-4 h-4" /> Dashboard
      </button>
      {data.map(item => (
        <button key={item.type} onClick={() => setActiveView(item.type)} className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors flex items-center gap-2 shadow-sm ${activeView === item.type ? 'bg-blue-600 text-white' : 'bg-slate-900/40 backdrop-blur-md text-slate-300 border border-slate-700/50 hover:bg-slate-800/30 backdrop-blur-sm hover:text-blue-600'}`}>
          <FolderOpen className="w-4 h-4" /> {item.type} Management
        </button>
      ))}
    </div>
  );

  const renderSyncButton = () => (
    <button 
      onClick={fetchLivePrices} 
      disabled={isSyncing}
      className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold shadow-sm transition-all ${isSyncing ? 'bg-slate-700/50 text-slate-400 cursor-not-allowed' : 'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white active:scale-95'}`}
    >
      <RefreshCw className={`w-4 h-4 ${isSyncing ? 'animate-spin' : ''}`} />
      {isSyncing ? 'Syncing...' : 'Live Sync'}
    </button>
  );

  const getBackgroundImage = () => {
    switch(activeView) {
      case 'Stocks': return "url('/stocks_bg.png')";
      case 'ETF': return "url('/etf_bg.png')";
      case 'Mutual Fund': return "url('/mutual_fund_bg.png')";
      case 'EPF': return "url('/trading_bg.png')"; // Can change to epf_bg.png if available
      default: return "url('/trading_bg.png')";
    }
  };

  // Render Sub-view (Management View)
  if (activeView !== 'Dashboard') {
    const activeCategoryData = computedData.find(item => item.type === activeView);
    if (!activeCategoryData) return null;

    const holdings = activeCategoryData.holdings || [];

    return (
      <div className="min-h-screen text-slate-100 p-4 md:p-8 font-sans pb-24 relative" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), ${getBackgroundImage()}`, backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center' }}>
        {toast && (
          <div className={`fixed top-4 right-4 flex items-center gap-2 px-4 py-3 rounded-lg shadow-lg z-50 text-white transition-all transform duration-300 ${toast.type === 'success' ? 'bg-emerald-600' : 'bg-rose-600'}`}>
            <CheckCircle className="w-5 h-5" /> <span className="font-medium">{toast.message}</span>
          </div>
        )}

        {isModalOpen && (
          <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-slate-900/40 backdrop-blur-md rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">
              <div className="px-6 py-4 border-b border-slate-700/50 flex justify-between items-center bg-slate-800/30 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-slate-100">{editingHoldingId ? 'Edit Asset' : 'Add New Asset'}</h3>
                <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-300"><X className="w-5 h-5"/></button>
              </div>
              <form onSubmit={handleSaveHolding} className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-200 mb-1">{activeView === 'Mutual Fund' ? 'Fund Name' : activeView === 'EPF' ? 'Month & Year' : activeView === 'PPF' ? 'Date' : 'Asset Name'}</label>
                  <input type="text" required className="w-full p-2 border border-slate-700/50 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-slate-800/50 text-white placeholder-slate-400" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder={activeView === 'PPF' ? "e.g. 12-12-2024" : activeView === 'Mutual Fund' ? "e.g. Parag Parikh Flexi Cap Fund" : "e.g. Reliance Industries"} />
                </div>
                
                {activeView === 'EPF' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-slate-200 mb-1">Employee Share (₹)</label>
                      <input type="number" step="any" required className="w-full p-2 border border-slate-700/50 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-slate-800/50 text-white placeholder-slate-400" value={formData.employee || ''} onChange={e => setFormData({...formData, employee: e.target.value})} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-200 mb-1">Employer Share (₹)</label>
                      <input type="number" step="any" required className="w-full p-2 border border-slate-700/50 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-slate-800/50 text-white placeholder-slate-400" value={formData.employer || ''} onChange={e => setFormData({...formData, employer: e.target.value})} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-200 mb-1">Pension Contribution (₹)</label>
                      <input type="number" step="any" required className="w-full p-2 border border-slate-700/50 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-slate-800/50 text-white placeholder-slate-400" value={formData.pension || ''} onChange={e => setFormData({...formData, pension: e.target.value})} />
                    </div>
                  </>
                )}

                {activeView === 'PPF' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-slate-200 mb-1">Invested Amount (₹)</label>
                      <input type="number" step="any" required className="w-full p-2 border border-slate-700/50 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-slate-800/50 text-white placeholder-slate-400" value={formData.avgBuyPrice || ''} onChange={e => setFormData({...formData, avgBuyPrice: e.target.value})} />
                    </div>
                  </>
                )}
                
                {activeView !== 'Mutual Fund' && activeView !== 'EPF' && activeView !== 'PPF' && (
                  <div>
                    <label className="block text-sm font-medium text-slate-200 mb-1">Ticker Symbol (Google Finance Format)</label>
                    <input type="text" className="w-full p-2 border border-slate-700/50 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-slate-800/50 text-white placeholder-slate-400" value={formData.ticker} onChange={e => setFormData({...formData, ticker: e.target.value})} placeholder="e.g. NSE:RELIANCE or NSE:ITC" />
                    <p className="text-xs text-slate-400 mt-1">Required for Live Sync. Supports Google Finance formats like NSE:TICKER.</p>
                  </div>
                )}
                
                {activeView !== 'Mutual Fund' && activeView !== 'EPF' && activeView !== 'PPF' ? (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-200 mb-1">Shares / Units</label>
                      <input type="number" step="any" required className="w-full p-2 border border-slate-700/50 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-slate-800/50 text-white placeholder-slate-400" value={formData.units} onChange={e => setFormData({...formData, units: e.target.value})} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-200 mb-1">Avg Buy Price (₹)</label>
                      <input type="number" step="any" required className="w-full p-2 border border-slate-700/50 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-slate-800/50 text-white placeholder-slate-400" value={formData.avgBuyPrice} onChange={e => setFormData({...formData, avgBuyPrice: e.target.value})} />
                    </div>
                  </div>
                ) : activeView === 'Mutual Fund' ? (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-slate-200 mb-1">Total Invested Amount (₹)</label>
                      <input type="number" step="any" required className="w-full p-2 border border-slate-700/50 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-slate-800/50 text-white placeholder-slate-400" value={formData.avgBuyPrice} onChange={e => setFormData({...formData, avgBuyPrice: e.target.value})} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-200 mb-1">Total Current Value (₹)</label>
                      <input type="number" step="any" required className="w-full p-2 border border-slate-700/50 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-slate-800/50 text-white placeholder-slate-400" value={formData.cmp} onChange={e => setFormData({...formData, cmp: e.target.value})} />
                    </div>
                  </>
                ) : null}

                <div className="pt-4 flex justify-end gap-3">
                  <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-slate-300 font-medium hover:bg-slate-700/50 rounded-lg">Cancel</button>
                  <button type="submit" className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm">Save</button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="max-w-7xl mx-auto space-y-6">
          {renderNavigationTabs()}
          
          <div className="bg-slate-900/40 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-slate-700/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-900/30 rounded-xl">
                <FolderOpen className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-blue-100">{activeView} Management</h1>
                <p className="text-slate-400 text-sm">{holdings.length} {activeView === 'Mutual Fund' ? 'funds' : 'holdings'} listed &bull; Total Invested: {formatCurrency(activeCategoryData.invested)}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {activeView !== 'Mutual Fund' && activeView !== 'EPF' && activeView !== 'PPF' && renderSyncButton()}
              <button onClick={() => openModal(activeView)} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-medium transition-colors shadow-sm active:scale-95">
                <Plus className="w-5 h-5" /> Add New {activeView === 'Mutual Fund' ? 'Fund' : activeView === 'EPF' || activeView === 'PPF' ? 'Entry' : 'Asset'}
              </button>
            </div>
          </div>

          {(activeView === 'EPF' || activeView === 'PPF') && (
            <div className="bg-slate-900/40 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-slate-700/50 mb-6">
              <h3 className="text-lg font-bold text-slate-100 mb-6 flex items-center gap-2">Invested vs Current Value ({activeView})</h3>
              <div className="h-[320px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={activeCategoryData.ledgerData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748B' }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748B' }} tickFormatter={(value) => `₹${value / 1000}k`} />
                    <Tooltip formatter={(value) => formatCurrency(value)} cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                    <Legend iconType="circle" />
                    <Bar dataKey="invested" name="Invested (Month)" fill="#1E3A8A" radius={[4, 4, 0, 0]} maxBarSize={50} />
                    <Bar dataKey="currentValue" name="Current Balance" fill="#14B8A6" radius={[4, 4, 0, 0]} maxBarSize={50} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          <div className="bg-slate-900/40 backdrop-blur-md rounded-2xl shadow-md border border-slate-700/50 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-sm whitespace-nowrap shadow-sm">
                    {activeView === 'EPF' || activeView === 'PPF' ? (
                      <>
                        <th className="p-4 font-semibold rounded-tl-xl">{activeView === 'EPF' ? 'Month & Year' : 'Date'}</th>
                        {activeView === 'EPF' && <th className="p-4 font-semibold text-right">Employee Share</th>}
                        {activeView === 'EPF' && <th className="p-4 font-semibold text-right">Employer Share</th>}
                        {activeView === 'EPF' && <th className="p-4 font-semibold text-right">Pension</th>}
                        {activeView === 'PPF' && <th className="p-4 font-semibold text-right">Invested Value</th>}
                        {activeView === 'EPF' && <th className="p-4 font-semibold text-right">Total Invested</th>}
                        <th className="p-4 font-semibold text-right">Interest Earned</th>
                        <th className="p-4 font-semibold text-right">Cumulative Value</th>
                        <th className="p-4 font-semibold text-center rounded-tr-xl">Actions</th>
                      </>
                    ) : (
                      <>
                        <th className="p-4 font-semibold rounded-tl-xl">{activeView === 'Mutual Fund' ? 'Fund Name' : 'Asset Name'}</th>
                        {activeView !== 'Mutual Fund' && <th className="p-4 font-semibold text-right">Shares</th>}
                        {activeView !== 'Mutual Fund' && <th className="p-4 font-semibold text-right">Avg Buy Price (₹)</th>}
                        <th className="p-4 font-semibold text-right">Invested (₹)</th>
                        {activeView !== 'Mutual Fund' && <th className="p-4 font-semibold text-right">CMP (₹)</th>}
                        <th className="p-4 font-semibold text-right">Current Value (₹)</th>
                        <th className="p-4 font-semibold text-right">P&L (₹)</th>
                        <th className="p-4 font-semibold text-center">Returns (%)</th>
                        <th className="p-4 font-semibold text-center rounded-tr-xl">Actions</th>
                      </>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {holdings.length > 0 ? (activeView === 'EPF' || activeView === 'PPF' ? activeCategoryData.ledgerData : holdings).map((holding, index) => {
                    if (activeView === 'EPF' || activeView === 'PPF') {
                      return (
                        <tr key={holding.id} className={`border-b border-slate-700/50 transition-colors ${index % 2 === 0 ? 'bg-slate-900/40 backdrop-blur-md' : 'bg-slate-800/30 backdrop-blur-sm/50'} hover:bg-blue-900/30/40`}>
                          <td className="p-4 font-bold text-slate-100">{holding.name}</td>
                          {activeView === 'EPF' && <td className="p-4 text-slate-300 text-right">{formatCurrency(holding.employee)}</td>}
                          {activeView === 'EPF' && <td className="p-4 text-slate-300 text-right">{formatCurrency(holding.employer)}</td>}
                          {activeView === 'EPF' && <td className="p-4 text-slate-300 text-right">{formatCurrency(holding.pension)}</td>}
                          {activeView === 'PPF' && <td className="p-4 text-slate-300 text-right">{formatCurrency(holding.amount)}</td>}
                          {activeView === 'EPF' && <td className="p-4 font-medium text-slate-200 text-right">{formatCurrency(holding.invested)}</td>}
                          <td className="p-4 font-medium text-emerald-500 text-right">+{formatCurrency(holding.interest)}</td>
                          <td className="p-4 font-bold text-slate-100 text-right">{formatCurrency(holding.currentValue)}</td>
                          <td className="p-4 text-center space-x-2">
                            <button onClick={() => openModal(activeView, holding)} className="p-1.5 text-blue-600 hover:bg-blue-100 rounded-md transition-colors" title="Edit">
                              <Edit2 className="w-4 h-4" />
                            </button>
                            <button onClick={() => handleDeleteHolding(activeView, holding.id)} className="p-1.5 text-rose-600 hover:bg-rose-100 rounded-md transition-colors" title="Delete">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      );
                    }

                    const invested = holding.units * holding.avgBuyPrice;
                    const currentVal = holding.units * holding.cmp;
                    const pnl = currentVal - invested;
                    const returns = invested > 0 ? (pnl / invested) * 100 : 0;
                    const isProfit = pnl >= 0;

                    return (
                      <tr key={holding.id} className={`border-b border-slate-700/50 transition-colors ${index % 2 === 0 ? 'bg-slate-900/40 backdrop-blur-md' : 'bg-slate-800/30 backdrop-blur-sm/50'} hover:bg-blue-900/30/40`}>
                        <td className="p-4 font-bold text-slate-100">
                           {holding.name}
                           {activeView !== 'Mutual Fund' && holding.ticker && <div className="text-xs text-slate-400 font-normal">{holding.ticker}</div>}
                        </td>
                        {activeView !== 'Mutual Fund' && <td className="p-4 text-slate-300 text-right">{holding.units}</td>}
                        {activeView !== 'Mutual Fund' && <td className="p-4 text-slate-300 text-right">{formatCurrency(holding.avgBuyPrice)}</td>}
                        <td className="p-4 font-medium text-slate-200 text-right">{formatCurrency(invested)}</td>
                        {activeView !== 'Mutual Fund' && <td className="p-4 text-slate-300 text-right">{formatCurrency(holding.cmp)}</td>}
                        <td className="p-4 font-bold text-slate-100 text-right">{formatCurrency(currentVal)}</td>
                        <td className={`p-4 font-bold text-right ${isProfit ? 'text-emerald-600' : 'text-rose-600'}`}>
                          {isProfit ? '+' : ''}{formatCurrency(pnl)}
                        </td>
                        <td className="p-4 text-center">
                          <span className={`inline-flex items-center justify-center px-2.5 py-1 rounded-md text-xs font-bold ${isProfit ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                            {isProfit ? '+' : ''}{returns.toFixed(2)}%
                          </span>
                        </td>
                        <td className="p-4 text-center space-x-2">
                          <button onClick={() => openModal(activeView, holding)} className="p-1.5 text-blue-600 hover:bg-blue-100 rounded-md transition-colors" title="Edit">
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button onClick={() => handleDeleteHolding(activeView, holding.id)} className="p-1.5 text-rose-600 hover:bg-rose-100 rounded-md transition-colors" title="Delete">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    );
                  }) : (
                    <tr><td colSpan={activeView === 'EPF' ? "8" : activeView === 'PPF' ? "5" : activeView === 'Mutual Fund' ? "6" : "9"} className="p-8 text-center text-slate-400 italic">No assets added yet. Click "Add New Asset" to begin.</td></tr>
                  )}
                </tbody>
                {holdings.length > 0 && (
                  <tfoot className="bg-slate-800/30 backdrop-blur-sm border-t-2 border-slate-700/50">
                    {activeView === 'EPF' || activeView === 'PPF' ? (
                      <tr>
                        <td className="p-4 font-bold text-slate-100 text-right">TOTAL</td>
                        {activeView === 'EPF' && <td className="p-4 font-bold text-slate-100 text-right">{formatCurrency(holdings.reduce((sum, h) => sum + Number(h.employee), 0))}</td>}
                        {activeView === 'EPF' && <td className="p-4 font-bold text-slate-100 text-right">{formatCurrency(holdings.reduce((sum, h) => sum + Number(h.employer), 0))}</td>}
                        {activeView === 'EPF' && <td className="p-4 font-bold text-slate-100 text-right">{formatCurrency(holdings.reduce((sum, h) => sum + Number(h.pension), 0))}</td>}
                        <td className="p-4 font-bold text-slate-100 text-right">{formatCurrency(activeCategoryData.invested)}</td>
                        {activeView === 'EPF' && <td className="p-4 font-bold text-emerald-500 text-right">{formatCurrency(activeCategoryData.current - activeCategoryData.invested)}</td>}
                        {activeView === 'PPF' && <td className="p-4 font-bold text-emerald-500 text-right">{formatCurrency(activeCategoryData.current - activeCategoryData.invested)}</td>}
                        <td className="p-4 font-bold text-slate-100 text-right">{formatCurrency(activeCategoryData.current)}</td>
                        <td></td>
                      </tr>
                    ) : (
                      <tr>
                        <td colSpan={activeView === 'Mutual Fund' ? "1" : "3"} className="p-4 font-bold text-slate-100 text-right">TOTAL</td>
                        <td className="p-4 font-bold text-slate-100 text-right">{formatCurrency(activeCategoryData.invested)}</td>
                        {activeView !== 'Mutual Fund' && <td className="p-4 font-bold text-slate-100 text-right">-</td>}
                        <td className="p-4 font-bold text-slate-100 text-right">{formatCurrency(activeCategoryData.current)}</td>
                        <td className={`p-4 font-bold text-right ${(activeCategoryData.current - activeCategoryData.invested) >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                          {(activeCategoryData.current - activeCategoryData.invested) >= 0 ? '+' : ''}{formatCurrency(activeCategoryData.current - activeCategoryData.invested)}
                        </td>
                        <td className="p-4 text-center">
                          <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold ${(activeCategoryData.current - activeCategoryData.invested) >= 0 ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                            {activeCategoryData.invested > 0 ? (((activeCategoryData.current - activeCategoryData.invested) / activeCategoryData.invested) * 100).toFixed(2) : 0}%
                          </span>
                        </td>
                        <td></td>
                      </tr>
                    )}
                  </tfoot>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Dashboard View Returns
  return (
    <div className="min-h-screen text-slate-100 p-4 md:p-8 font-sans pb-24 relative" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), ${getBackgroundImage()}`, backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center' }}>
      {toast && (
        <div className={`fixed top-4 right-4 flex items-center gap-2 px-4 py-3 rounded-lg shadow-lg z-50 text-white transition-all transform duration-300 ${toast.type === 'success' ? 'bg-emerald-600' : 'bg-rose-600'}`}>
          <CheckCircle className="w-5 h-5" /> <span className="font-medium">{toast.message}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto space-y-6">
        {renderNavigationTabs()}

        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-700/50 pb-4">
          <div>
            <h1 className="text-3xl font-bold text-blue-100 flex items-center gap-2">
              <Briefcase className="w-8 h-8 text-teal-500" /> Portfolio Overview
            </h1>
            <p className="text-slate-400 text-sm mt-1">Track your portfolio performance and daily updates.</p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-900/40 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-slate-700/50 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <p className="text-slate-400 font-medium text-sm">Total Invested</p>
              <div className="w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center"><DollarSign className="w-4 h-4 text-blue-600" /></div>
            </div>
            <h2 className="text-2xl font-bold text-slate-100">{formatCurrency(totalInvested)}</h2>
          </div>
          <div className="bg-slate-900/40 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-slate-700/50 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <p className="text-slate-400 font-medium text-sm">Current Value</p>
              <div className="w-8 h-8 rounded-full bg-teal-900/30 flex items-center justify-center"><Activity className="w-4 h-4 text-teal-600" /></div>
            </div>
            <h2 className="text-2xl font-bold text-slate-100">{formatCurrency(totalCurrent)}</h2>
          </div>
          <div className="bg-slate-900/40 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-slate-700/50 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <p className="text-slate-400 font-medium text-sm">Total Returns</p>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${totalProfit >= 0 ? 'bg-emerald-900/30' : 'bg-rose-900/30'}`}>
                {totalProfit >= 0 ? <TrendingUp className="w-4 h-4 text-emerald-600" /> : <TrendingDown className="w-4 h-4 text-rose-600" />}
              </div>
            </div>
            <h2 className={`text-2xl font-bold ${totalProfit >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
              {totalProfit >= 0 ? '+' : ''}{formatCurrency(totalProfit)}
            </h2>
          </div>
          <div className="bg-slate-900/40 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-slate-700/50 flex flex-col justify-between hover:shadow-md transition-shadow">
             <div className="flex items-center justify-between mb-4">
              <p className="text-slate-400 font-medium text-sm">Return Percentage</p>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${totalProfitPercent >= 0 ? 'bg-emerald-900/30' : 'bg-rose-900/30'}`}>
                <AlertCircle className={`w-4 h-4 ${totalProfitPercent >= 0 ? 'text-emerald-600' : 'text-rose-600'}`} />
              </div>
            </div>
            <h2 className={`text-2xl font-bold ${totalProfitPercent >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
              {totalProfitPercent >= 0 ? '+' : ''}{totalProfitPercent.toFixed(2)}%
            </h2>
          </div>
        </div>

        <div className="flex justify-end">
           <button onClick={() => setShowCharts(!showCharts)} className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors bg-blue-900/30 px-4 py-2 rounded-lg">
             {showCharts ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
             {showCharts ? 'Hide Charts' : 'Show Charts'}
           </button>
        </div>

        {showCharts && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-slate-900/40 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-slate-700/50">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-2">
                <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">History Trend</h3>
                <select className="text-sm p-1.5 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500 bg-slate-800/50 text-white" value={selectedLineChartType} onChange={e => setSelectedLineChartType(e.target.value)}>
                    <option value="All">All Portfolio</option>
                    {data.map(d => <option key={d.type} value={d.type}>{d.type}</option>)}
                </select>
              </div>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={historicalData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                    <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 12 }} tickFormatter={(date) => { const d = new Date(date); return `${d.getDate()} ${d.toLocaleString('default', { month: 'short'})}`; }} />
                    <YAxis domain={['auto', 'auto']} axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 12 }} tickFormatter={(value) => `₹${(value / 1000).toFixed(0)}k`} />
                    <Tooltip formatter={(value) => formatCurrency(value)} labelFormatter={(label) => new Date(label).toLocaleDateString()} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                    <Line type="monotone" dataKey="value" stroke="#14B8A6" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-slate-900/40 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-slate-700/50">
              <h3 className="text-lg font-bold text-slate-100 mb-6 flex items-center gap-2">Asset Allocation</h3>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={pieData} cx="50%" cy="50%" innerRadius={70} outerRadius={110} paddingAngle={5} dataKey="value" labelLine={false} label={renderCustomizedLabel}>
                      {pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                    </Pie>
                    <Tooltip formatter={(value) => formatCurrency(value)} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                    <Legend verticalAlign="bottom" height={36} iconType="circle" />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-slate-900/40 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-slate-700/50 lg:col-span-2">
              <h3 className="text-lg font-bold text-slate-100 mb-6 flex items-center gap-2">Invested vs Current Value</h3>
              <div className="h-[320px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748B' }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748B' }} tickFormatter={(value) => `₹${value / 1000}k`} />
                    <Tooltip formatter={(value) => formatCurrency(value)} cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                    <Legend iconType="circle" />
                    <Bar dataKey="Invested" fill="#1E3A8A" radius={[4, 4, 0, 0]} maxBarSize={50} />
                    <Bar dataKey="Current" fill="#14B8A6" radius={[4, 4, 0, 0]} maxBarSize={50} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        <div className="bg-slate-900/40 backdrop-blur-md rounded-2xl shadow-sm border border-slate-700/50 overflow-hidden">
          <div className="p-6 border-b border-slate-700/50">
             <h3 className="text-lg font-bold text-slate-100">Investment Breakdown</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-800/30 backdrop-blur-sm text-slate-400 text-sm border-b border-slate-700/50 whitespace-nowrap">
                  <th className="p-4 font-medium cursor-pointer hover:text-slate-100" onClick={() => requestSort('type')}>Category {sortConfig.key === 'type' && (sortConfig.direction === 'asc' ? '↑' : '↓')}</th>
                  <th className="p-4 font-medium cursor-pointer hover:text-slate-100" onClick={() => requestSort('invested')}>Invested Amount {sortConfig.key === 'invested' && (sortConfig.direction === 'asc' ? '↑' : '↓')}</th>
                  <th className="p-4 font-medium cursor-pointer hover:text-slate-100" onClick={() => requestSort('current')}>Current Value {sortConfig.key === 'current' && (sortConfig.direction === 'asc' ? '↑' : '↓')}</th>
                  <th className="p-4 font-medium cursor-pointer hover:text-slate-100" onClick={() => requestSort('dailyChange')}>Daily Change {sortConfig.key === 'dailyChange' && (sortConfig.direction === 'asc' ? '↑' : '↓')}</th>
                  <th className="p-4 font-medium cursor-pointer hover:text-slate-100" onClick={() => requestSort('profit')}>Overall Return {sortConfig.key === 'profit' && (sortConfig.direction === 'asc' ? '↑' : '↓')}</th>
                  <th className="p-4 font-medium cursor-pointer hover:text-slate-100" onClick={() => requestSort('percentChange')}>% Gain {sortConfig.key === 'percentChange' && (sortConfig.direction === 'asc' ? '↑' : '↓')}</th>
                  <th className="p-4 font-medium"></th>
                </tr>
              </thead>
              <tbody>
                {filteredData.length > 0 ? filteredData.map((item, index) => {
                  const profit = item.current - item.invested;
                  const profitPercent = item.invested > 0 ? (profit / item.invested) * 100 : 0;
                  const isPositive = profit >= 0;
                  const dailyIsPositive = item.dailyChange >= 0;

                  return (
                    <tr key={index} className="border-b border-slate-50 hover:bg-slate-800/30 backdrop-blur-sm/50 transition-colors group cursor-pointer" onClick={() => setActiveView(item.type)}>
                      <td className="p-4 font-medium text-slate-100">{item.type}</td>
                      <td className="p-4 text-slate-300">{formatCurrency(item.invested)}</td>
                      <td className="p-4 text-slate-100 font-medium">{formatCurrency(item.current)}</td>
                      <td className={`p-4 text-sm font-medium flex items-center gap-1 mt-2 ${dailyIsPositive ? 'text-emerald-600' : 'text-rose-600'}`}>
                        {item.dailyChange !== 0 ? (
                          <>
                            {dailyIsPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                            {dailyIsPositive ? '+' : ''}{formatCurrency(item.dailyChange)}
                          </>
                        ) : <span className="text-slate-400">-</span>}
                      </td>
                      <td className={`p-4 font-medium ${isPositive ? 'text-emerald-600' : 'text-rose-600'}`}>
                        {isPositive ? '+' : ''}{formatCurrency(profit)}
                      </td>
                      <td className={`p-4 font-medium text-center`}>
                         <span className={`inline-flex px-2 py-1 rounded-md text-xs font-bold ${isPositive ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                            {isPositive ? '+' : ''}{profitPercent.toFixed(2)}%
                         </span>
                      </td>
                      <td className="p-4 text-right">
                         <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Manage &rarr;</button>
                      </td>
                    </tr>
                  );
                }) : <tr><td colSpan="7" className="p-8 text-center text-slate-400">No investments found.</td></tr>}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
