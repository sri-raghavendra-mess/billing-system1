import {
  collection, addDoc, updateDoc, deleteDoc, doc,
  onSnapshot, query, where, orderBy, serverTimestamp, limit
} from 'firebase/firestore';
import { db } from '../firebase';

const menuCol = collection(db, 'menu');
const billsCol = collection(db, 'bills');
const expensesCol = collection(db, 'expenses');
const summaryCol = collection(db, 'daily_summary');

export const listenMenu = (sessionType, cb) =>
  onSnapshot(query(menuCol, where('sessionType', '==', sessionType), orderBy('createdAt', 'asc')), cb);

export const addMenuItem = (data) =>
  addDoc(menuCol, { ...data, createdAt: serverTimestamp(), updatedAt: serverTimestamp() });

export const updateMenuItem = (id, data) =>
  updateDoc(doc(menuCol, id), { ...data, updatedAt: serverTimestamp() });

export const deleteMenuItem = (id) => deleteDoc(doc(menuCol, id));

export const addBill = (payload) =>
  addDoc(billsCol, { ...payload, createdAt: serverTimestamp() });

export const addExpense = (payload) =>
  addDoc(expensesCol, { ...payload, createdAt: serverTimestamp() });

export const updateExpense = (id, data) =>
  updateDoc(doc(expensesCol, id), { ...data, updatedAt: serverTimestamp() });

export const deleteExpense = (id) => deleteDoc(doc(expensesCol, id));

export const listenBillsByDate = (dateKey, cb) =>
  onSnapshot(query(billsCol, where('createdDate', '==', dateKey)), cb);

export const listenExpensesByDate = (dateKey, cb) =>
  onSnapshot(query(expensesCol, where('expenseDate', '==', dateKey)), cb);

export const listenRecentBills = (cb) =>
  onSnapshot(query(billsCol, orderBy('createdAt', 'desc'), limit(400)), cb);

export const listenRecentExpenses = (cb) =>
  onSnapshot(query(expensesCol, orderBy('expenseDate', 'desc'), limit(400)), cb);

export const listenDailySummaryRecent = (cb) =>
  onSnapshot(query(summaryCol, orderBy('date', 'desc'), limit(30)), cb);

