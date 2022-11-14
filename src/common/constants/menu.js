import { OPERATIONS } from "./operation"

export const MENU = {
  TABLE: {
    id: "TABLE",
    name: "Tables",
    icon: "fa-table",
    operations: OPERATIONS,
    child: {
      TABLE: {
        id: "TABLE1",
        name: "Tables1",
        icon: "fa-table",
        operations: OPERATIONS,
      }
    }
  },
  CARD: {
    id: "CARD",
    name: "Card",
    icon: "fab fa-wpforms",
    operations: OPERATIONS,
    child: {
      CARD1: {
        id: "CARD1",
        name: "Card1",
        icon: "fab fa-wpforms",
        operations: OPERATIONS,
      },
      CARD2: {
        name: "Card2",
        icon: "fab fa-wpforms",
        operations: OPERATIONS,
      }
    }
  },
}