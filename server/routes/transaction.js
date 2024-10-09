import { Router } from "express";
const router = Router();
import axios from "axios";
import Transaction from "../models/Transaction.js";
import {
  getTransactions,
  initializeDB,
  getStatistics,
  getbarChart,
  getpiechart,
  getcombinedAPI
} from "../controllers/TransactionDBcontroller.js";

router.get("/initialize", initializeDB);
router.get("/transactions", getTransactions);
router.get("/statistics", getStatistics);
router.get("/barChart", getbarChart);
router.get("/pieChart", getpiechart);
router.get("/combinedAPI", getcombinedAPI);

export default router;
