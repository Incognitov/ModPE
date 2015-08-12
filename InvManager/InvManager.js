/* Made by Incognito.
===[ InvManager ]===
Do not distribute without the written permision of Incognito. No modification or copying is allowed, and any unallowed copies shall be ceased. */
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var path = android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang/minecraftpe/";
var btnNp, btnNpUI, btnP, btnPUI, GUI;
var fontString, ff, fs, font;
var btnd, action, bNP, cords = [],
    show = -1;
var tools = [
    [268, 283, 272, 267, 276],
    [270, 285, 274, 257, 278],
    [271, 286, 275, 258, 279],
    [269, 284, 273, 256, 277],
    [359],
    [259],
    [290, 294, 291, 292, 293]
];
var blocks = [
    [1, 4, 14, 15, 16, 21, 22, 24, 41, 42, 43, 44, 45, 48, 49, 52, 56, 57, 61, 62, 66, 67, 71, 73, 74, 87, 89, 97, 98, 101, 108, 109, 112, 114, 121, 128, 129, 133, 139, 155, 156, 159, 172, 173, 245, 246, 255],
    [5, 17, 26, 47, 53, 54, 58, 63, 64, 65, 68, 85, 96, 107, 134, 135, 136, 157, 158, 162, 163, 164],
    [2, 3, 12, 13, 60, 78, 80, 82, 110, 243, 253],
    [18, 30, 31, 32, 35, 106, 171, 175, 254], 46
];
var order = [276, 278, 279, 277, 293, 267, 257, 258, 256, 292, 283, 285, 286, 284, 294, 272, 274, 275, 273, 291, 268, 270, 271, 269, 290, 261, 262, 359, 259, 346, 345, 347, [325, 0],
    [325, 1],
    [325, 8],
    [325, 10], 50, 310, 311, 312, 313, 306, 307, 308, 309, 302, 303, 304, 305, 314, 315, 316, 317, 298, 299, 300, 301, 354, 364, 320, 297, 366, 393, 400, [350, 0],
    [350, 1], 357, 360, 391, 260, 282, 459, 281, 363, 319, [349, 0],
    [349, 1], 365, 392, 457, 58, 54, 61, 62, 355, 245, 247, 264, 265, 266, 388, 406, 331, 348, [263, 0],
    [263, 1], 318, 337, [351, 0],
    [351, 1],
    [351, 2],
    [351, 3],
    [351, 4],
    [351, 5],
    [351, 6],
    [351, 7],
    [351, 8],
    [351, 9],
    [351, 10],
    [351, 11],
    [351, 12],
    [351, 13],
    [351, 14],
    [351, 15], 57, 42, 41, 152, 22, [155, 0],
    [155, 1],
    [155, 2], 173, 56, 15, 14, 73, 74, 21, 16, [1, 0],
    [1, 1],
    [1, 2],
    [1, 3],
    [1, 4],
    [1, 5],
    [1, 6], 4, 3, 2, 7, 13, 12, [24, 0],
    [24, 1],
    [24, 2], 48, 49, 87, 89, [97, 0],
    [97, 1],
    [97, 2],
    [97, 3],
    [97, 4],
    [97, 5],
    [98, 0],
    [98, 1],
    [98, 2], 112, 121, 255, 5, 280, [17, 0],
    [17, 1],
    [17, 2],
    [162, 0],
    [162, 1],
    [35, 0],
    [35, 1],
    [35, 2],
    [35, 3],
    [35, 4],
    [35, 5],
    [35, 6],
    [35, 7],
    [35, 8],
    [35, 9],
    [35, 10],
    [35, 11],
    [35, 12],
    [35, 13],
    [35, 14],
    [35, 15], 82, [159, 0],
    [159, 1],
    [159, 2],
    [159, 3],
    [159, 4],
    [159, 5],
    [159, 6],
    [159, 7],
    [159, 8],
    [159, 9],
    [159, 10],
    [159, 11],
    [159, 12],
    [159, 13],
    [159, 14],
    [159, 15], 321, 323, 324, 330, 336, 405, 63, 64, 71, 85, 96, 101, 107, 139, 183, 184, 185, 186, 187, [43, 0],
    [43, 1],
    [43, 2],
    [43, 3],
    [43, 4],
    [43, 5],
    [43, 6],
    [43, 7],
    [44, 0],
    [44, 1],
    [44, 2],
    [44, 3],
    [44, 4],
    [44, 5],
    [44, 6],
    [44, 7], 53, 114, 128, 156, 157, 158, 19, 20, 26, 30, 45, 46, 47, 78, 79, 80, 91, 95, 102, 170, [171, 0],
    [171, 1],
    [171, 2],
    [171, 3],
    [171, 4],
    [171, 5],
    [171, 6],
    [171, 7],
    [171, 8],
    [171, 9],
    [171, 10],
    [171, 11],
    [171, 12],
    [171, 13],
    [171, 14],
    [171, 15], 246, 328, 329, 333, 27, 66, 65, 287, 288, 289, 334, 341, 344, 352, 367, 378, [6, 0],
    [6, 1],
    [6, 2],
    [6, 3],
    [6, 4],
    [6, 5], 18, 31, 32, 37, [38, 0],
    [38, 1],
    [38, 2],
    [38, 3],
    [38, 4],
    [38, 5],
    [38, 6],
    [38, 7],
    [38, 8], 39, 40, 59, 81, 83, 86, 99, 100, 103, 106, 111, [161, 0],
    [161, 1],
    [175, 0],
    [175, 1],
    [175, 2],
    [175, 3],
    [175, 4],
    [175, 5], 254, 295, 296, 338, 353, 361, 362, 458, 332, 335, 26, 339, [349, 2],
    [349, 3],
    [383, 10],
    [383, 11],
    [383, 12],
    [383, 13],
    [383, 14],
    [383, 15],
    [383, 16],
    [383, 17],
    [383, 19],
    [383, 32],
    [383, 33],
    [383, 34],
    [383, 35],
    [383, 36],
    [383, 37],
    [383, 38],
    [383, 39],
    [383, 40],
    [383, 41],
    [383, 42], 339, 340, 8, 9, 10, 11, [18, 0],
    [18, 1],
    [18, 2], 46, 51, 52, 59, 60, 92, 104, 105, 110, 141, 142, [161, 0],
    [161, 1], 198, 243, 244, 248, 249, 253
];
var stack = [
    [256, 257, 258, 259, 261, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 282, 283, 284, 285, 286, 290, 291, 292, 293, 294, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 324, 328, 329, 330, 333, 346, 354, 355, 359, 459],
    [323, 325, 344]
];
var inventory = [],
    chest = [],
    len = 0,
    rmq = 0,
    debug = 0;

function startDestroyBlock(x, y, z) {
    cords = [x + 0.5, y + 0.5, z + 0.5];
    correctTool(getCarriedItem(), getTile(x, y, z), false);
}

function useItem(x, y, z, i, b) {
    if (len != 0 && getTile(x, y, z) == 54) {
        preventDefault();
        sortChest(x, y, z, len);
        len = 0;
    }
    if (b == 46 && i != 46) {
        correctTool(i, b, false);
    }
}

function destroyBlock(a, b, c) {
    cords = [a + 0.5, b + 0.5, c + 0.5]
    startDestroyBlock(a, b, c);
}

function attackHook() {
    correctTool(getCarriedItem(), null, true);
}

function procCmd(cmd) {
    var c = cmd.split(" ");
    if (c[0] == "help") {
        helpMsg()
    }
    if (c[0] == "sort") {
        if (c[1] == "chest") {
            len = 26;
            show = [80, "Now hit a normal chest to sort it!"];
        } else if (c[1] == "largechest" || c[1] == "large" && c[2] == "chest") {
            len = 53;
            show = [80, "Now hit a large chest to sort it!"];
        } else if (c[1] == "inv" || c[1] == "inventory") {
            sort();
        } else {
            helpMsg()
        }
    }
}

function helpMsg() {
    clientMessage("[InvManager] §o§7 A little help there ?\n§7> §f§o/sort inv§7 to sort your inventory ;\n§7> §f§o/sort chest§7 (then hit a regular chest)§7 to sort a small chest ;\n§7> §f§o/sort large chest§7 (then hit a large chest)§7 to sort a large chest.\n§7> The mod will place the right tool in your hand when you start breaking a block (if you have it), and even craft it for you if you feel lazy.\n\n§7§oContact Incognito to report any bug or problem encountered!\n§lEnjoy the mod!");
}

function sort() {
    var ans = null;
    inventory = [], rmq = 0;
    for (var j = 0; j <= order.length - 1; j++) {
        for (var i = 9; i <= 44; i++) {
            if (typeof order[j] == "object") {
                if (Player.getInventorySlot(i) == order[j][0] && Player.getInventorySlotData(i) == order[j][1]) {
                    ans = [order[j][0], order[j][1], count([
                        [order[j][0], order[j][1]]
                    ])];
                }
            } else {
                if (Player.getInventorySlot(i) == order[j]) {
                    ans = [order[j], Player.getInventorySlotData(i), count([
                        [order[j], Player.getInventorySlotData(i)]
                    ])];
                }
            }
            if (ans != null) {
                add(ans, null);
                del(ans[0], ans[1], null);
                ans = null
            }
        }
    }
    createSortedInventory();
    show = [60, "Inventory sorted!"];
}

function sortChest(x, y, z, le) {
    var ans3 = null;
    chest = [], rmq = 0;
    for (var j = 0; j <= order.length - 1; j++) {
        for (var i = 0; i <= le; i++) {
            if (typeof order[j] == "object") {
                if (Level.getChestSlot(x, y, z, i) == order[j][0] && Level.getChestSlotData(x, y, z, i) == order[j][1]) {
                    ans3 = [order[j][0], order[j][1], count([
                        [order[j][0], order[j][1]]
                    ], "chest", [x, y, z, le])];
                }
            } else {
                if (Level.getChestSlot(x, y, z, i) == order[j]) {
                    ans3 = [order[j], Level.getChestSlotData(x, y, z, i), count([
                        [order[j], Level.getChestSlotData(x, y, z, i)]
                    ], "chest", [x, y, z, le])];
                }
            }
            if (ans3 != null) {
                add(ans3, "chest");
                del(ans3[0], ans3[1], [x, y, z, le]);
                ans3 = null
            }
        }
    }
    createSortedChest(x, y, z, le);
    show = [60, "Chest sorted!"];
}

function createSortedInventory() {
    for (var i = 9; i <= 44; i++) {
        if (Player.getInventorySlot(i) != 0) {
            inventory.push([Player.getInventorySlot(i), Player.getInventorySlotData(i), Player.getInventorySlotCount(i)]);
            Player.clearInventorySlot(i);
            if (rmq == 0) {
                clientMessage("[InvManager] §o§7 I found some item I didn't know where to sort, so I put them in the end.");
                rmq++
            }
        }
    }
    for (var i = 0; i <= inventory.length - 1; i++) {
        if (i <= 35) {
            net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSetInventorySlot(i + 9, inventory[i][0], inventory[i][2], inventory[i][1]);
        } else {
            drop(inventory[i][0], inventory[i][2], inventory[i][1]);
            if (rmq < 2) {
                clientMessage("[InvManager] §o§7 There happened to be too many items for your inventory, so I dropped them aside.");
                rmq = 2;
            }
        }
    }
}

function createSortedChest(x, y, z, le) {
    for (var i = 0; i <= le; i++) {
        if (Level.getChestSlot(x, y, z, i) != 0) {
            chest.push([Level.getChestSlot(x, y, z, i), Level.getChestSlotData(x, y, z, i), Level.getChestSlotCount(x, y, z, i)]);
            Level.setChestSlot(x, y, z, i, 0, 0, 0);
            if (rmq == 0) {
                clientMessage("[InvManager] §o§7 I found some item I didn't know where to sort, so I put them in the end.");
                rmq++
            }
        }
    }
    for (var i = 0; i <= chest.length - 1; i++) {
        if (i <= le) {
            Level.setChestSlot(x, y, z, i, chest[i][0], chest[i][1], chest[i][2]);
        } else {
            drop(chest[i][0], chest[i][2], chest[i][1]);
            if (rmq < 2) {
                clientMessage("[InvManager] §o§7 There happened to be too many items for this chest, so I dropped them aside.");
                rmq = 2;
            }
        }
    }
}

function add(item, isChest) {
    var count2 = item[2];
    if (isChest == null) {
        if (count2 - getStack(item[0]) >= 0) {
            inventory.push([item[0], item[1], getStack(item[0])]);
            item[2] -= getStack(item[0]);
            add(item);
        } else if (item[2] != 0) {
            inventory.push(item);
        }
    } else {
        if (count2 - getStack(item[0]) >= 0) {
            chest.push([item[0], item[1], getStack(item[0])]);
            item[2] -= getStack(item[0]);
            add(item, "chest");
        } else if (item[2] != 0) {
            chest.push(item);
        }
    }
}

function del(id, data, co) {
    if (co == null) {
        for (var i = 9; i <= 44; i++) {
            if (data == null) {
                if (Player.getInventorySlot(i) == id) {
                    Player.clearInventorySlot(i);
                }
            } else {
                if (Player.getInventorySlot(i) == id && Player.getInventorySlotData(i) == data) {
                    Player.clearInventorySlot(i);
                }
            }
        }
    } else {
        for (var i = 0; i <= co[3]; i++) {
            if (data == null) {
                if (Level.getChestSlot(co[0], co[1], co[2], i) == id) {
                    Level.setChestSlot(co[0], co[1], co[2], i, 0, 0, 0);
                }
            } else {
                if (Level.getChestSlot(co[0], co[1], co[2], i) == id && Level.getChestSlotData(co[0], co[1], co[2], i) == data) {
                    Level.setChestSlot(co[0], co[1], co[2], i, 0, 0, 0);
                }
            }
        }
    }
}

function getStack(id) {
    var ans2 = null;
    for (var r = 0; r <= stack[0].length - 1; r++) {
        if (id == stack[0][r]) {
            return 1;
            ans2 = 1;
        }
    }
    for (var r = 0; r <= stack[1].length - 1; r++) {
        if (id == stack[1][r]) {
            return 16;
            ans2 = 1;
        }
    }
    if (ans2 == null) {
        return 64;
    }
}

function modTick() {
    if (show[0] > 0) {
        show[0]--;
        ModPE.showTipMessage("§o  " + show[1]);
    }
    if (debug > 0) {
        debug--
    }
}

function count(id, isChest, inf) {
    var ans = 0;
    if (isChest == "chest") {
        for (var i = 0; i <= inf[3]; i++) {
            for (var j = 0; j <= id.length - 1; j++) {
                if (typeof id[j] == "object") {
                    if (Level.getChestSlot(inf[0], inf[1], inf[2], i) == id[j][0] && Level.getChestSlotData(inf[0], inf[1], inf[2], i) == id[j][1]) {
                        ans += Level.getChestSlotCount(inf[0], inf[1], inf[2], i);
                    }
                } else {
                    if (Level.getChestSlot(inf[0], inf[1], inf[2], i) == id[j]) {
                        ans += Level.getChestSlotCount(inf[0], inf[1], inf[2], i);
                    }
                }
            }
        }
    } else {
        for (var i = 9; i <= 44; i++) {
            for (var j = 0; j <= id.length - 1; j++) {
                if (typeof id[j] == "object") {
                    if (Player.getInventorySlot(i) == id[j][0] && Player.getInventorySlotData(i) == id[j][1]) {
                        ans += Player.getInventorySlotCount(i);
                    }
                } else {
                    if (Player.getInventorySlot(i) == id[j]) {
                        ans += Player.getInventorySlotCount(i);
                    }
                }
            }
        }
    }
    return ans;
}

function idToName(id) {
    for (var m = 0; m <= 4; m++) {
        if (id == tools[6][m]) {
            return "hoe";
        } else if (id == tools[0][m]) {
            return "sword";
        } else if (id == tools[1][m]) {
            return "pickaxe";
        } else if (id == tools[2][m]) {
            return "axe";
        } else if (id == tools[3][m]) {
            return "shovel";
        }
    }
    if (id == tools[4][0]) {
        return "shears";
    } else if (id == tools[5][0]) {
        return "flint and steel";
    } else if (id > 256) {
        return "random item";
    } else {
        return "block";
    }
}

function bestTool(type) {
    if (type == "sword") {
        return (analyse(tools[0]));
    } else if (type == "pickaxe") {
        return (analyse(tools[1]));
    } else if (type == "axe") {
        return (analyse(tools[2]));
    } else if (type == "shovel") {
        return (analyse(tools[3]));
    } else if (type == "flint and steel") {
        return (analyse(tools[5]));
    } else if (type == "shears") {
        return (analyse(tools[4]));
    }
}

function analyse(array) {
    var ans = [];
    for (var n = 0; n <= array.length - 1; n++) {
        for (var o = 9; o <= 44; o++) {
            if (Player.getInventorySlot(o) == array[n]) {
                ans = [o, Player.getInventorySlot(o), Player.getInventorySlotCount(o), Player.getInventorySlotData(o)];
            }
        }
    }
    return ans;
}

function switchTo(slot) {
    var dat = [Player.getSelectedSlotId(), Player.getInventorySlot(Player.getSelectedSlotId()), Player.getInventorySlotCount(Player.getSelectedSlotId()), Player.getInventorySlotData(Player.getSelectedSlotId())];
    if (getCarriedItem() != 0) {
        Entity.setCarriedItem(getPlayerEnt(), slot[1], slot[2], slot[3]);
    } else {
        addItemInventory(slot[1], slot[2], slot[3]);
    }
    Player.clearInventorySlot(slot[0]);
    if (dat[1] != 0) {
        Player.addItemInventory(dat[1], dat[2], dat[3]);
    }
    Level.addParticle(5, cords[0], cords[1], cords[2], 0, 0, 0, 2);
}

function analyseBlock(id) {
    for (var p = 0; p <= blocks[0].length; p++) {
        if (id == blocks[0][p]) {
            return "pickaxe";
        }
    }
    for (var p = 0; p <= blocks[1].length; p++) {
        if (id == blocks[1][p]) {
            return "axe";
        }
    }
    for (var p = 0; p <= blocks[2].length; p++) {
        if (id == blocks[2][p]) {
            return "shovel";
        }
    }
    for (var p = 0; p <= blocks[3].length; p++) {
        if (id == blocks[3][p]) {
            return "shears";
        }
    }
    if (id == blocks[4]) {
        return "flint and steel";
    }
}

function nameToId(name) {
    if (name == "sword") {
        return tools[0];
    } else if (name == "pickaxe") {
        return tools[1];
    } else if (name == "axe") {
        return tools[2];
    } else if (name == "shovel") {
        return tools[3];
    } else if (name == "shears") {
        return tools[4];
    } else if (name == "flint and steel") {
        return tools[5];
    } else {
        return [];
    }
}

function correctTool(itemId, blockId, sword) {
    if (itemId <= 406 && itemId != 457 && itemId != 458 && itemId != 459 && GUI == null) {
        var toolNeeded;
        if (sword) {

            toolNeeded = "sword";
        } else {
            toolNeeded = analyseBlock(blockId);
        }
        if (idToName(itemId) != toolNeeded) {
            if (count(nameToId(toolNeeded)) > 0) {
                switchTo(bestTool(toolNeeded));
            } else {
                startCraft(defineNeededElements(toolNeeded));
            }
        }
    }
}


function take(id, amount) {
    for (var k = 9; k <= 44; k++) {
        for (var l = 0; l <= id.length - 1; l++) {
            if (Player.getInventorySlot(k) == id[l] && amount > 0) {
                if (Player.getInventorySlotCount(k) <= amount) {
                    amount -= Player.getInventorySlotCount(k);
                    Player.clearInventorySlot(k);
                } else if (Player.getInventorySlotCount(k) > amount) {
                    net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSetInventorySlot(k, Player.getInventorySlot(k), Player.getInventorySlotCount(k) - amount, Player.getInventorySlotData(k));
                }
            }
        }
    }
}

function defineNeededElements(name) {
    if (name == "sword") {
        return [name, [
            [280, 1]
        ], 2];
    } else if (name == "pickaxe" || name == "axe") {
        return [name, [
            [280, 2]
        ], 3];
    } else if (name == "shovel") {
        return [name, [
            [280, 2]
        ], 1];
    } else if (name == "flint and steel") {
        return [name, [
            [265, 1],
            [318, 1]
        ]];
    } else if (name == "shears") {
        return [name, [
            [265, 2]
        ]];
    } else {
        return null;
    }
}

function startCraft(array) {
    if (array != null) {
        var name = array[0],
            elements = array[1];
        if (array[2] != null) {
            materials = array[2];
            var nm = findMaterials(array[2]);
            if (nm != null) {
                array[1].push(nm);
                array[2] = null;
                startCraft(array);
            }
        } else {
            var ps = true;
            for (var r = 0; r <= array[1].length - 1; r++) {
                if (count([array[1][r][0]]) < array[1][r][1]) {
                    ps = false;
                }
            }
            if (ps && GUI == null && debug == 0) {
                debug = 5;
                craftUI(array);
            }
        }
    }
}


function findMaterials(mt) {
    var rtn = null;
    if (count([264]) >= mt) {
        rtn = 264;
    } else if (count([265]) >= mt) {
        rtn = 265;
    } else if (count([4]) >= mt) {
        rtn = 4;
    } else if (count([266]) >= mt) {
        rtn = 266;
    } else if (count([5]) >= mt) {
        rtn = 5;
    }
    if (!rtn) {
        return null;
    } else {
        return [rtn, mt];
    }
}

function craft(tl) {
    for (var s = 0; s <= tl[1].length - 1; s++) {
        take([tl[1][s][0]], tl[1][s][1]);
    }
    if (tl[0] == "sword") {
        if (tl[1][1][0] == 264) {
            drop(276);
        } else if (tl[1][1][0] == 265) {
            drop(267);
        } else if (tl[1][1][0] == 4) {
            drop(272);
        } else if (tl[1][1][0] == 266) {
            drop(283);
        } else if (tl[1][1][0] == 5) {
            drop(268);
        }
    } else if (tl[0] == "pickaxe") {
        if (tl[1][1][0] == 264) {
            drop(278);
        } else if (tl[1][1][0] == 265) {
            drop(257);
        } else if (tl[1][1][0] == 4) {
            drop(274);
        } else if (tl[1][1][0] == 266) {
            drop(285);
        } else if (tl[1][1][0] == 5) {
            drop(270);
        }

    } else if (tl[0] == "axe") {
        if (tl[1][1][0] == 264) {
            drop(279);
        } else if (tl[1][1][0] == 265) {
            drop(258);
        } else if (tl[1][1][0] == 4) {
            drop(275);
        } else if (tl[1][1][0] == 266) {
            drop(286);
        } else if (tl[1][1][0] == 5) {
            drop(271);
        }
    } else if (tl[0] == "shovel") {
        if (tl[1][1][0] == 264) {
            drop(277);
        } else if (tl[1][1][0] == 265) {
            drop(256);
        } else if (tl[1][1][0] == 4) {
            drop(273);
        } else if (tl[1][1][0] == 266) {
            drop(284);
        } else if (tl[1][1][0] == 5) {
            drop(269);
        }
    } else if (tl[0] == "shears") {
        drop(359);
    } else if (tl[0] == "flint and steel") {
        drop(259);
    }
}

function drop(id, ct, dt) {
    if (ct > 0) {
        Level.dropItem(Player.getX(), Player.getY(), Player.getZ(), 1, id, ct, dt);
    } else {
        Level.dropItem(Player.getX(), Player.getY(), Player.getZ(), 1, id, 1, 0);
    }
}


function leaveGame() {
    deleteGui()
}

function deleteGui() {
    ctx.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
                if (GUI != null) {
                    GUI.dismiss();
                    GUI = null
                }
            } catch (e) {
                print(e);
            }
        }
    });
}

btnNp = "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TUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDx4bXA6TW9kaWZ5RGF0ZT4yMDE0LTA5LTExVDIyOjMxOjQ0PC94bXA6TW9kaWZ5RGF0ZT4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTQtMDktMTFUMjI6MzE6MzM8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj4xNDQ8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjE0NDwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT42NTUzNTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MTI4PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjQ4PC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CoTXvMoAAAEhSURBVHgB7ZyxDYNAFMUOxP6LpIpElIaKHYjENETXeQf7qtc+P+vKvxzv1zN6WgKrtnnFx2c/xjY53NcvHEIC3/Mc/QDC4Vk5AUhDmBNAODorJwBpCHMCCEdn5QQgDWFOAOHorJwApCHMCSAcnZUTgDSEOQGEo7NyApCGMCeAcHRWTgDSEOYEEI7OyglAGsKcAMLRWTkBSEOYE0A4OisnAGkIcwIIR2flBCANYU4A4eisnACkIcwJIBydlROANIQ5AYSjs3ICkIYwJ4BwdFZOANIQ5gQQjs7KCUAawpwAwtFZOQFIQ5gTQDg6KycAaQhzAghHZ+UEIA1hTgDh6KycAKQhzAkgHJ2VE4A0hDkBhKOzcgKQhjBv82L0PBrccxL4A+8QDr/rw2ZtAAAAAElFTkSuQmCC";
btnNpUI = android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(btnNp, 0), 0, android.util.Base64.decode(btnNp, 0).length);

btnP = "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TUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDx4bXA6TW9kaWZ5RGF0ZT4yMDE0LTA5LTExVDIyOjM3OjMwPC94bXA6TW9kaWZ5RGF0ZT4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTQtMDktMTFUMjI6Mzc6MjA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj4xNDQ8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjE0NDwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT42NTUzNTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MTI4PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjQ4PC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+ClZEXB0AAAElSURBVHgB7ZyxDQJBEMQOdFWQISEBTXxEgqD9R6Ia0GXuwd5o0vE43sPtev+NTknguW1jruYrdD4Cr/djHH21a0wCCUAawpwAwtFZOQFIQ5gTQDg6KycAaQhzAghHZ+UEIA1hTgDh6KycAKQhzAkgHJ2VE4A0hDkBhKOzcgKQhjAngHB0Vk4A0hDmBBCOzsoJQBrCnADC0Vk5AUhDmBNAODorJwBpCHMCCEdn5QQgDWFOAOHorJwApCHMCSAcnZUTgDSEOQGEo7NyApCGMCeAcHRWTgDSEOYEEI7OyglAGsKcAMLRWTkBSEOYE0A4OisnAGkIcwIIR2flBCANYU4A4eisnACkIcwJIBydlROANIR5rkfR62lw5yQwL+fT+O4fZ/tajz8v+gjF0rnaDAAAAABJRU5ErkJggg==";
btnPUI = android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(btnP, 0), 0, android.util.Base64.decode(btnP, 0).length);



fontString = "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GeYaBBoiGkAaVhpkGnoakBqmGtAa8gAAAAUAAAAAA4ADgAADAAcACwASABYAACU1IxUlNSEVNzUjFSU1IyIHBhUBESERAcCPAR3+44+PAR2OPCkq/s8DgH+OjqaPj6aPj6eNKSo6/Y4DgPyAAAIAAAAAAIADgAADAAcAADE1MxUDETMRgICAgIABAAKA/YAAAAIAAAIAAYADgAADAAcAABkBMxEzETMRgICAAgABgP6AAYD+gAAAAAACAAAAAAKAA4AAAwAfAAABNSMVAxEjNTM1IzUzETMRMxEzETMVIxUzFSMRIxEjEQGAgICAgICAgICAgICAgICAAYCAgP6AAQCAgIABAP8AAQD/AICAgP8AAQD/AAAAAAAFAAAAAAKAA4AABwALAA8AEwAbAAAhNSE1IRUjFRM1MxUlNSEVJTUzFT0BMzUzFSEVAQD/AAIAgICA/gABgP4AgICAAQCAgICAAQCAgICAgICAgICAgICAAAAAAAcAAAAAAoADgAADAAcACwAPABMAFwAbAAAxNTMVIREzESURMxkBNTMVNREzESURMxElNTMVgAGAgP4AgICA/gCAAYCAgIABAP8AgAEA/wABAICAgAEA/wCAAQD/AICAgAAAAAAIAAAAAAKAA4AAAwAHAAsADwAbAB8AIwAnAAAzNSEVMzUzFSURMxEBNTMVATUjNSM1MzUzETMRATUzFTM1MxUlNTMVgAEAgID9gIABgID/AICAgICA/oCAgID/AICAgICAgAEA/wABAICA/wCAgICA/wD/AAIAgICAgICAgAAAAAEAAAIAAIADgAADAAAZATMRgAIAAYD+gAAAAAAFAAAAAAIAA4AAAwAHAAsADwATAAAhNSEVJTUzFSURMxkBNTMVPQEhFQEAAQD+gID/AICAAQCAgICAgIABgP6AAYCAgICAgAAFAAAAAAIAA4AAAwAHAAsADwATAAAxNSEVPQEzFTURMxEBNTMVJTUhFQEAgID/AID+gAEAgICAgICAAYD+gAGAgICAgIAAAAAFAAABAAIAAoAAAwAHAAsADwATAAARNTMVITUzFSU1IRUlNTMVITUzFYABAID+gAEA/oCAAQCAAQCAgICAgICAgICAgIAAAAABAAAAgAKAAwAACwAAJREhNSERMxEhFSERAQD/AAEAgAEA/wCAAQCAAQD/AID/AAABAAD/gACAAQAAAwAAFREzEYCAAYD+gAABAAABgAKAAgAAAwAAETUhFQKAAYCAgAABAAAAAACAAQAAAwAAMREzEYABAP8AAAAFAAAAAAKAA4AAAwAHAAsADwATAAAxNTMVNREzGQE1MxU1ETMZATUzFYCAgICAgICAAQD/AAEAgICAAQD/AAEAgIAAAAUAAAAAAoADgAADAAcADwAXABsAADM1IRUBNTMVAREzETMVIxUhESM1MzUzEQE1IRWAAYD/AID+gICAgAGAgICA/gABgICAAYCAgP8AAoD+gICAAYCAgP2AAoCAgAAAAAEAAAAAAoADgAALAAAxNSERIzUzNTMRIRUBAICAgAEAgAIAgID9AIAAAAAABgAAAAACgAOAAAcACwAPABMAFwAbAAAxETMVITUzEQE1MxU9ASEVATUzFQURMxEBNSEVgAGAgP4AgAEA/gCAAYCA/gABgAEAgID/AAEAgICAgIABAICAgAEA/wABAICAAAAAAAcAAAAAAoADgAADAAcACwAPABMAFwAbAAAzNSEVJTUzFSERMxEBNSEVATUzFQURMxEBNSEVgAGA/gCAAYCA/oABAP4AgAGAgP4AAYCAgICAgAEA/wABAICAAQCAgIABAP8AAQCAgAAAAwAAAAACgAOAAAMABwATAAATNTMVPQEzFRMRIREzFSERIzUhEYCAgID+AIABgIABAAIAgICAgID9gAEAAQCAAYCA/IAAAAAABAAAAAACgAOAAAMABwALABMAADM1IRUlNTMVIREzEQERIRUhFSEVgAGA/gCAAYCA/YACgP4AAYCAgICAgAGA/oABgAGAgICAAAAAAAUAAAAAAoADgAADAAcADwATABcAADM1IRU1ETMRIREzFSEVIRkBNTMVPQEhFYABgID9gIABgP6AgAEAgICAAQD/AAIAgID/AAIAgICAgIAAAwAAAAACgAOAAAMABwAPAAAhETMZATUzFTURIRUjESERAQCAgP6AgAKAAYD+gAGAgICAAQCAAQD+gAAABwAAAAACgAOAAAMABwALAA8AEwAXABsAADM1IRUlETMRIREzEQE1IRUlETMRIREzEQE1IRWAAYD+AIABgID+AAGA/gCAAYCA/gABgICAgAEA/wABAP8AAQCAgIABAP8AAQD/AAEAgIAAAAAABQAAAAACgAOAAAMABwALABMAFwAAMzUhFT0BMxUBETMRATUhNSERMxEBNSEVgAEAgP4AgAGA/oABgID+AAGAgICAgIABgAEA/wD/AICAAQD+AAIAgIAAAAIAAAAAAIACgAADAAcAADERMxEDETMRgICAAQD/AAGAAQD/AAAAAAACAAD/gACAAoAAAwAHAAAVETMRAxEzEYCAgIABgP6AAgABAP8AAAAABwAAAAACAAOAAAMABwALAA8AEwAXABsAACE1MxUlNTMVJTUzFSU1MxU9ATMVPQEzFT0BMxUBgID/AID/AID/AICAgICAgICAgICAgICAgICAgICAgICAgAAAAAACAAAAgAKAAgAAAwAHAAA9ASEVATUhFQKA/YACgICAgAEAgIAAAAAABwAAAAACAAOAAAMABwALAA8AEwAXABsAADE1MxU9ATMVPQEzFT0BMxUlNTMVJTUzFSU1MxWAgICA/wCA/wCA/wCAgICAgICAgICAgICAgICAgICAgIAAAAYAAAAAAoADgAADAAcACwAPABMAFwAAITUzFQM1MxU9ATMVATUzFQURMxEBNSEVAQCAgICA/gCAAYCA/gABgICAAQCAgICAgAEAgICAAQD/AAEAgIAAAAAEAAAAAAMAA4AAAwAHAA8AEwAAMzUhFSURMxE3ESERMxEzEQE1IRWAAgD9gICAAQCAgP2AAgCAgIACgP2AgAGA/wABgP4AAgCAgAAAAgAAAAACgAOAAAsADwAAMREzFSE1MxEjESEZATUhFYABgICA/oABgAMAgID9AAIA/gADAICAAAADAAAAAAKAA4AAAwAHABMAACURMxEDNTMVAREhFSEVIRUhESEVAgCAgID9gAIA/oABgP6AAYCAAYD+gAIAgID9gAOAgICA/oCAAAAABQAAAAACgAOAAAMABwALAA8AEwAAMzUhFT0BMxUhETMRATUzFSU1IRWAAYCA/YCAAYCA/gABgICAgICAAoD9gAIAgICAgIAAAgAAAAACgAOAAAMACwAAJREzEQURIRUhESEVAgCA/YACAP6AAYCAAoD9gIADgID9gIAAAAEAAAAAAoADgAALAAAxESEVIRUhFSERIRUCgP4AAQD/AAIAA4CAgID+gIAAAQAAAAACgAOAAAkAADERIRUhFSEVIRECgP4AAQD/AAOAgICA/gAAAAQAAAAAAoADgAADAAkADQARAAAzNSEVNREjNSERIREzGQE1IRWAAYCAAQD9gIACAICAgAGAgP4AAoD9gAKAgIAAAAAAAQAAAAACgAOAAAsAADERMxEhETMRIxEhEYABgICA/oADgP8AAQD8gAIA/gAAAAAAAQAAAAABgAOAAAsAADE1MxEjNSEVIxEzFYCAAYCAgIACgICA/YCAAAMAAAAAAoADgAADAAcACwAAMzUhFSU1MxUhETMRgAGA/gCAAYCAgICAgIADAP0AAAUAAAAAAoADgAADAAcACwATABcAACERMxEBNTMVAzUzFQERMxEhFSERATUzFQIAgP8AgICA/gCAAQD/AAGAgAGA/oABgICAAQCAgP2AA4D/AID+AAMAgIAAAAAAAQAAAAACgAOAAAUAADERMxEhFYACAAOA/QCAAAMAAAAAAoADgAADAAsAEwAAATUzFQERMxUzFSMRIREjNTM1MxEBAID+gICAgAGAgICAAgCAgP4AA4CAgP2AAoCAgPyAAAAAAAMAAAAAAoADgAADAAsAEwAAATUzFQERMxUzFSMRIREjNTMRMxEBAID+gICAgAGAgICAAgCAgP4AA4CAgP2AAYCAAYD8gAAAAAQAAAAAAoADgAADAAcACwAPAAAzNSEVJREzESERMxEBNSEVgAGA/gCAAYCA/gABgICAgAKA/YACgP2AAoCAgAACAAAAAAKAA4AAAwANAAABNTMVAREhFSEVIRUhEQIAgP2AAgD+gAGA/oACgICA/YADgICAgP4AAAYAAAAAAoADgAADAAcACwAPABMAFwAAMzUhFTM1MxUlNTMVIREzESURMxEBNSEVgAEAgID/AID+AIABgID+AAGAgICAgICAgAKA/YCAAgD+AAIAgIAAAAADAAAAAAKAA4AAAwAHABEAACERMxEDNTMVAREhFSEVIRUhEQIAgICA/YACAP6AAYD+gAIA/gACgICA/YADgICAgP4AAAYAAAAAAoADgAADAAcACwAPABMAFwAAMzUhFSU1MxUhETMRATUhFSU1MxU9ASEVgAGA/gCAAYCA/gABgP4AgAIAgICAgIABgP6AAYCAgICAgICAgAAAAAABAAAAAAKAA4AABwAAIREhNSEVIREBAP8AAoD/AAMAgID9AAADAAAAAAKAA4AAAwAHAAsAADM1IRUlETMRIREzEYABgP4AgAGAgICAgAMA/QADAP0AAAAABQAAAAACgAOAAAMABwALAA8AEwAAITUzFSURMxEzETMRAREzESERMxEBAID/AICAgP4AgAGAgICAgAEA/wABAP8AAQACAP4AAgD+AAAAAAADAAAAAAKAA4AAAwALABMAAAE1MxUBETMRMxUjFSE1IzUzETMRAQCA/oCAgIABgICAgAEAgID/AAOA/YCAgICAAoD8gAAAAAAJAAAAAAKAA4AAAwAHAAsADwATABcAGwAfACMAADERMxEhETMRATUzFTM1MxUlNTMVJTUzFTM1MxUlNTMVITUzFYABgID+AICAgP8AgP8AgICA/gCAAYCAAYD+gAGA/oABgICAgICAgICAgICAgICAgICAAAUAAAAAAoADgAADAAcACwAPABMAACERMxEBNTMVMzUzFSU1MxUhNTMVAQCA/wCAgID+AIABgIACgP2AAoCAgICAgICAgIAAAAUAAAAAAoADgAAFAAkADQARABcAADERMxUhFQE1MxU9ATMVPQEzFT0BITUhEYACAP4AgICA/gACgAEAgIABAICAgICAgICAgICA/wAAAAAAAQAAAAABgAOAAAcAADERIRUhESEVAYD/AAEAA4CA/YCAAAAABQAAAAACgAOAAAMABwALAA8AEwAAITUzFSURMxEBNTMVJREzEQE1MxUCAID/AID/AID/AID/AICAgIABAP8AAQCAgIABAP8AAQCAgAAAAAABAAAAAAGAA4AABwAAMTUhESE1IREBAP8AAYCAAoCA/IAAAAAFAAACAAKAA4AAAwAHAAsADwATAAARNTMVITUzFSU1MxUzNTMVJTUzFYABgID+AICAgP8AgAIAgICAgICAgICAgICAAAEAAP+AAoAAAAADAAAVNSEVAoCAgIAAAAEAAAMAAQADgAADAAARNSEVAQADAICAAAMAAAAAAoACgAADAA0AEQAAPQEzHQE1ITUhNSE1MxEBNSEVgAGA/oABgID+AAGAgICAgICAgID+AAIAgIAAAAADAAAAAAKAA4AAAwAHABEAACURMxEBNSEVAREzETMVIxEhFQIAgP6AAQD+AICAgAGAgAGA/oABgICA/gADgP6AgP8AgAAAAAAFAAAAAAKAAoAAAwAHAAsADwATAAAzNSEVPQEzFSERMxEBNTMVJTUhFYABgID9gIABgID+AAGAgICAgIABgP6AAQCAgICAgAADAAAAAAKAA4AAAwAHABEAADURMxkBNSEVATUhESM1MxEzEYABAP8AAYCAgICAAYD+gAGAgID+AIABAIABgPyAAAAAAAMAAAAAAoACgAADAA0AEQAAMzUhFSURMxUhNTMRIRURNSEVgAIA/YCAAYCA/gABgICAgAGAgID/AIABgICAAAACAAAAAAIAA4AACwAPAAAzESM1MzUzFSEVIRkBNSEVgICAgAEA/wABAAIAgICAgP4AAwCAgAAAAAMAAP+AAoACgAADAAcAEQAAFTUhFQERMxEBNSE1IREhNSERAgD+AIABgP6AAYD+gAIAgICAAYABAP8A/wCAgAEAgP2AAAAAAAMAAAAAAoADgAADAAcADwAAIREzEQE1IRUBETMRMxUjEQIAgP6AAQD+AICAgAIA/gACAICA/gADgP6AgP6AAAACAAAAAACAA4AAAwAHAAAxETMRAzUzFYCAgAKA/YADAICAAAAEAAD/gAKAAwAAAwAHAAsADwAAFzUhFSURMxEhETMRAzUzFYABgP4AgAGAgICAgICAgAEA/wACAP4AAoCAgAAABQAAAAACAAOAAAMABwALAA8AFwAAITUzFSU1MxUDNTMVPQEzFQERMxEzFSMRAYCA/wCAgICA/gCAgICAgICAgAEAgICAgID+AAOA/gCA/wAAAAAAAgAAAAABAAOAAAMABwAAMzUzFSURMxGAgP8AgICAgAMA/QAABAAAAAACgAKAAAMABwANABEAAAERMxETETMRIREhFSMRATUzFQEAgICA/YABAIABAIABAAEA/wD/AAIA/gACgID+AAIAgIAAAgAAAAACgAKAAAMACQAAIREzESERIRUhEQIAgP2AAgD+gAIA/gACgID+AAAEAAAAAAKAAoAAAwAHAAsADwAAMzUhFSURMxEhETMRATUhFYABgP4AgAGAgP4AAYCAgIABgP6AAYD+gAGAgIAAAwAA/4ACgAKAAAMADwATAAABETMRAREzFTMVIxUhFSEREzUhFQIAgP2AgICAAYD+gIABAAEAAQD/AP6AAwCAgICA/wACgICAAAAAAAMAAP+AAoACgAADAAcAEwAAGQEzGQE1IRUTESE1ITUjNTM1MxGAAQCA/oABgICAgAEAAQD/AAEAgID9gAEAgICAgP0AAAAAAAMAAAAAAoACgAADAAsADwAAATUzFQERMxUzFSMREzUhFQIAgP2AgICAgAEAAYCAgP6AAoCAgP6AAgCAgAAAAAAFAAAAAAKAAoAAAwAHAAsADwATAAAxNSEVPQEzFSU1IRUlNTMVPQEhFQIAgP4AAYD+AIACAICAgICAgICAgICAgICAAAIAAAAAAYADgAADAA8AACE1MxUlESM1MxEzETMVIxEBAID/AICAgICAgICAAYCAAQD/AID+gAAAAgAAAAACgAKAAAMACQAANREzERU1IREzEYABgICAAgD+AICAAgD9gAAAAAAFAAAAAAKAAoAAAwAHAAsADwATAAAhNTMVJTUzFTM1MxUlETMRIREzEQEAgP8AgICA/gCAAYCAgICAgICAgIABgP6AAYD+gAACAAAAAAKAAoAAAwANAAA1ETMRFTUzETMRMxEzEYCAgICAgAIA/gCAgAEA/wACAP2AAAAACQAAAAACgAKAAAMABwALAA8AEwAXABsAHwAjAAAxNTMVITUzFSU1MxUzNTMVJTUzFSU1MxUzNTMVJTUzFSE1MxWAAYCA/gCAgID/AID/AICAgP4AgAGAgICAgICAgICAgICAgICAgICAgICAgIAAAAMAAP+AAoACgAADAAcADwAAFzUhFQERMxEBNSE1IREzEYABgP4AgAGA/oABgICAgIABgAGA/oD/AICAAYD9gAADAAAAAAKAAoAABwALABMAADE1MzUzFSEVATUzFT0BITUhFSMVgIABgP6AgP6AAoCAgICAgAEAgICAgICAgAAABQAAAAACAAOAAAMABwALAA8AEwAAITUhFSURMxEBNTMVNREzGQE1IRUBAAEA/oCA/wCAgAEAgICAAQD/AAEAgICAAQD/AAEAgIAAAAEAAAAAAIADgAADAAAxETMRgAOA/IAAAAUAAAAAAgADgAADAAcACwAPABMAADE1IRU1ETMZATUzFSURMxEBNSEVAQCAgP8AgP6AAQCAgIABAP8AAQCAgIABAP8AAQCAgAAAAAAEAAACgAMAA4AAAwAHAAsADwAAETUzFSE1IRUlNSEVITUzFYABAAEA/gABAAEAgAKAgICAgICAgICAAAACAAAAAACAA4AAAwAHAAAxETMRAzUzFYCAgAKA/YADAICAAAADAAAAAAIAAwAAAwAHAAsAADM1IRUlETMZATUhFYABgP4AgAGAgICAAgD+AAIAgIAAAAAAAgAAAAACAAMAAA8AEwAAMTUzESM1MzUzFTMVIxEhFQE1MxWAgICAgIABAP8AgIABAICAgID/AIACgICAAAAAAAUAAAEAAYACgAADAAcACwAPABMAABE1MxUzNTMVJTUzFSU1MxUzNTMVgICA/wCA/wCAgIABAICAgICAgICAgICAgAAABQAAAAACgAOAABMAFwAbAB8AIwAAITUjNTM1IzUzNTMVMxUjFTMVIxUBNTMVMzUzFSU1MxUhNTMVAQCAgICAgICAgID/AICAgP4AgAGAgICAgICAgICAgIACgICAgICAgICAgAAAAAACAAAAAACAA4AAAwAHAAAxETMRAxEzEYCAgAGA/oACAAGA/oAAAAAABQAA/4ACgAMAAAcACwAPABMAGwAABTUjNSEVIxUTNTMVIREzEQE1MxUlNTM1MxUzFQEAgAGAgICA/YCAAYCA/gCAgICAgICAgAEAgIABgP6AAQCAgICAgICAAAADAAAAAAMAA4AABwALAA8AAAERIRUjFTMVFxEhEQcRIREBAAEAgICA/gCAAwABAAGAgICAgAKA/YCAA4D8gAAAAQAAAQABgAMAAAcAABkBITUhNSERAQD/AAGAAQABAICA/gAACgAAAAACgAKAAAMABwALAA8AEwAXABsAHwAjACcAACE1MxUzNTMVJTUzFTM1MxUlNTMVMzUzFSU1MxUzNTMVJTUzFTM1MxUBAICAgP4AgICA/gCAgID/AICAgP8AgICAgICAgICAgICAgICAgICAgICAgICAgICAAAAAAAEAAACAAoABgAAFAAAlNSE1IRECAP4AAoCAgID/AAAAAQCAAQACAAGAAAMAABM1IRWAAYABAICAAAAAAAMAAAAAAwADgAAFAA0AEQAAAREhESMVBTUjNTMRIREHESERAQABAIABAICA/gCAAwABAAGA/wCAgICAAYD9gIADgPyAAAAAAAEAAAMAAoADgAADAAARNSEVAoADAICAAAIAAAIAAYADgAADAAcAAAE1IxUHESERAQCAgAGAAoCAgIABgP6AAAACAAD/gAKAAwAAAwAPAAAVNSEVAREhNSERMxEhFSERAoD+gP8AAQCAAQD/AICAgAEAAQCAAQD/AID/AAACAAACAAEAA4AABQAJAAAZATMVMxUDNTMVgICAgAIAAQCAgAEAgIAAAQAAAgABAAOAAAcAABE1MzUjNSERgIABAAIAgICA/oAAAAAAAQGAAwACgAOAAAMAAAE1IRUBgAEAAwCAgAAAAAEAAP+AAoADAAAJAAAVETMRIREzESEVgAGAgP4AgAOA/YACgP0AgAADAAAAAAKAAwAAAwANABEAABE1MxUTESM1MzUjNSERMxEzEYCAgICAAQCAgAIAgID+AAGAgICA/QADAP0AAAAAAQAAAYAAgAIAAAMAABE1MxWAAYCAgAAAAgCA/4ACAACAAAMABwAAFzUhFT0BMxWAAQCAgICAgICAAAAAAQAAAoAAgAOAAAMAABkBMxGAAoABAP8AAAAAAAIAAAIAAYADgAADAAcAAAE1IxUHESERAQCAgAGAAoCAgIABgP6AAAAKAAAAAAKAAoAAAwAHAAsADwATABcAGwAfACMAJwAAMTUzFTM1MxUlNTMVMzUzFSU1MxUzNTMVJTUzFTM1MxUlNTMVMzUzFYCAgP8AgICA/wCAgID+AICAgP4AgICAgICAgICAgICAgICAgICAgICAgICAgICAAAAIAAAAAAKAA4AAAwAJAA0AEQAVABkAHQAhAAAxNTMVIREzFTMVJREzESU1MxUlNTMVNREzESURMxElNTMVgAEAgID+AIABAID+gICA/gCAAYCAgIABAICAgAEA/wCAgICAgICAAQD/AIABAP8AgICAAAAAAAcAAAAAAoADgAADAAcADQARABUAGQAdAAAxNTMVNREzEQU1IxEhEQE1MxU1ETMRJREzESU1MxWAgAEAgAEA/oCAgP4AgAGAgICAgAEA/wCAgAEA/oABgICAgAEA/wCAAQD/AICAgAAABwAAAAACgAOAAAMABwANABEAFQAdACEAADE1MxU1ETMRBTUjESERATUzFTURMxEhNTM1IzUhEQE1MxWAgAEAgAEA/oCAgP4AgIABAAEAgICAgAEA/wCAgAEA/oABgICAgAEA/wCAgID+gAEAgIAAAAYAAAAAAoADgAADAAcACwAPABMAFwAAMzUhFT0BMxUhETMZATUzFT0BMxUDNTMVgAGAgP2AgICAgICAgICAgAEA/wABAICAgICAAQCAgAAAAwAAAAACgAOAAAsADwATAAAxETMVITUzESMRIRkBNSEVATUhFYABgICA/oABgP4AAQACAICA/gABAP8AAgCAgAEAgIAAAAAAAwAAAAACgAOAAAsADwATAAAxETMVITUzESMRIRkBNSEVAzUhFYABgICA/oABgIABAAIAgID+AAEA/wACAICAAQCAgAAFAAAAAAKAA4AACwAPABMAFwAbAAAxETMVITUzESMRIRkBNSEVJTUzFSE1MxUlNSEVgAGAgID+gAGA/gCAAYCA/gABgAIAgID+AAEA/wACAICAgICAgICAgIAAAAUAAAAAAwADgAALAA8AFwAbAB8AADERMxUhNTMRIxEhEQM1Mx0BNSE1IRUjFQE1IRUhNTMVgAGAgID+gICAAQABAID+gAEAAQCAAgCAgP4AAQD/AAKAgICAgICAgAEAgICAgAAEAAAAAAKAA4AACwAPABMAFwAAMREzFSE1MxEjESEZATUhFQE1MxUzNTMVgAGAgID+gAGA/oCAgIACAICA/gABAP8AAgCAgAEAgICAgAAAAAMAAAAAAoADgAALAA8AEwAAMREzFSE1MxEjESEZATUhFQE1MxWAAYCAgP6AAYD/AIACAICA/gABAP8AAgCAgAEAgIAAAQAAAAACgAOAABUAADERMxUzNSM1IRUhFTMVIxEhFSERIxGAgIACAP8AgIABAP6AgAMAgICAgICA/oCAAgD+AAAAAAAHAAD/gAKAA4AAAwAHAAsADwATABcAGwAABTUhFT0BMxUlNSEVPQEzFSERMxEBNTMVJTUhFQEAAQCA/gABgID9gIABgID+AAGAgICAgICAgICAgICAAgD+AAGAgICAgIAAAAAAAgAAAAACgAOAAAsADwAAMREhFSEVIRUhFSEVATUhFQKA/gABAP8AAgD9gAEAAoCAgICAgAMAgIAAAAAAAgAAAAACgAOAAAsADwAAMREhFSEVIRUhFSEVATUhFQKA/gABAP8AAgD/AAEAAoCAgICAgAMAgIAAAAAABQAAAAACgAOAAAkADQARABUAGQAAMREzFSEVIRUhFQE1IRUlNTMVITUzFSU1IRWAAQD/AAIA/gABgP4AgAGAgP4AAYACAICAgIACAICAgICAgICAgIAAAAMAAAAAAoADgAALAA8AEwAAMREhFSEVIRUhFSEVATUzFTM1MxUCgP4AAQD/AAIA/gCAgIACgICAgICAAwCAgICAAAAAAgAAAAACAAOAAAsADwAAMzUzESM1IRUjETMVATUhFYCAgAGAgID+AAEAgAGAgID+gIADAICAAAACAIAAAAKAA4AACwAPAAAzNTMRIzUhFSMRMxUDNSEVgICAAYCAgIABAIABgICA/oCAAwCAgAAAAAQAAAAAAoADgAALAA8AEwAXAAAzNTMRIzUhFSMRMxUBNTMVITUzFSU1IRWAgIABgICA/gCAAYCA/gABgIABgICA/oCAAoCAgICAgICAAAAAAwAAAAABgAOAAAsADwATAAAxNTMRIzUhFSMRMxUBNTMVMzUzFYCAAYCAgP6AgICAgAGAgID+gIADAICAgIAAAAIAAAAAAwADgAADABMAACURMxEFESM1MxEhFSERMxUjESEVAoCA/YCAgAIA/oCAgAGAgAKA/YCAAYCAAYCA/wCA/wCAAAAAAAUAAAAAAwADgAADAAsAFQAZAB0AAAE1MxUBETMRMxUjESE1IzUzESM1IREBNSEVITUzFQEAgP6AgICAAYCAgIABAP4AAQABAIABAICA/wADAP8AgP6AgIABgID9AAMAgICAgAAFAAAAAAKAA4AAAwAHAAsADwATAAAzNSEVJREzESERMxEBNSEVATUhFYABgP4AgAGAgP4AAYD+AAEAgICAAYD+gAGA/oABgICAAQCAgAAAAAUAAAAAAoADgAADAAcACwAPABMAADM1IRUlETMRIREzEQE1IRUDNSEVgAGA/gCAAYCA/gABgIABAICAgAGA/oABgP6AAYCAgAEAgIAAAAAABwAAAAACgAOAAAMABwALAA8AEwAXABsAADM1IRUlETMRIREzEQE1IRUlNTMVITUzFSU1IRWAAYD+AIABgID+AAGA/gCAAYCA/gABgICAgAGA/oABgP6AAYCAgICAgICAgICAAAcAAAAAAwADgAADAAcACwAPABcAGwAfAAAzNSEVJREzESERMxEBNTMdATUhNSEVIxUBNSEVITUzFYABgP4AgAGAgP2AgAEAAQCA/oABAAEAgICAgAGA/oABgP6AAgCAgICAgICAAQCAgICAAAYAAAAAAoADgAADAAcACwAPABMAFwAAMzUhFSURMxEhETMRATUhFSU1MxUhNTMVgAGA/gCAAYCA/gABgP4AgAGAgICAgAIA/gACAP4AAgCAgICAgICAAAAJAAAAgAKAAwAAAwAHAAsADwATABcAGwAfACMAAD0BMxUhNTMVJTUzFTM1MxUlNTMVJTUzFTM1MxUlNTMVITUzFYABgID+AICAgP8AgP8AgICA/gCAAYCAgICAgICAgICAgICAgICAgICAgICAgIAAAwAAAAACgAOAAAMADQAXAAABETMRATUjETMRMxUhFTURIzUhNSEVMxEBAID/AICAgAEAgP8AAYCAAQABgP6A/wCAAoD+AICAgAIAgICA/YAAAAAABAAAAAACgAOAAAMABwALAA8AADM1IRUlETMRIREzEQE1IRWAAYD+AIABgID9gAEAgICAAgD+AAIA/gACgICAAAQAAAAAAoADgAADAAcACwAPAAAzNSEVJREzESERMxEBNSEVgAGA/gCAAYCA/wABAICAgAIA/gACAP4AAoCAgAAGAAAAAAKAA4AAAwAHAAsADwATABcAADM1IRUlETMRIREzEQE1MxUhNTMVJTUhFYABgP4AgAGAgP2AgAGAgP4AAYCAgIABgP6AAYD+gAIAgICAgICAgAAABQAAAAACgAOAAAMABwALAA8AEwAAMzUhFSURMxEhETMRATUzFTM1MxWAAYD+AIABgID+AICAgICAgAIA/gACAP4AAoCAgICAAAAAAAYAAAAAAoADgAADAAcACwAPABMAFwAAIREzEQE1MxUzNTMVJTUzFSE1MxUBNSEVAQCA/wCAgID+AIABgID9gAEAAYD+gAGAgICAgICAgICAAQCAgAAAAAADAAD/gAKAAwAAAwAHABMAACURMxEBNSEVAREzETMVIxEhFSEVAgCA/oABAP4AgICAAYD+gIABgP6AAYCAgP2AA4D/AID/AICAAAAABAAAAAACgAOAAAMADQARABUAAD0BMx0BNSE1ITUhNTMRATUhFQE1IRWAAYD+gAGAgP4AAYD+AAEAgICAgICAgID+AAIAgIABAICAAAQAAAAAAoADgAADAA0AEQAVAAA9ATMdATUhNSE1ITUzEQE1IRUDNSEVgAGA/oABgID+AAGAgAEAgICAgICAgID+AAIAgIABAICAAAAGAAAAAAKAA4AAAwANABEAFQAZAB0AAD0BMx0BNSE1ITUhNTMRATUhFSU1MxUhNTMVJTUhFYABgP6AAYCA/gABgP4AgAGAgP4AAYCAgICAgICAgP4AAgCAgICAgICAgICAAAAABgAAAAADAAOAAAMADQARABkAHQAhAAA9ATMdATUhNSE1ITUzEQE1Mx0BNSE1IRUjFQE1IRUhNTMVgAGA/oABgID9gIABAAEAgP6AAQABAICAgICAgICAgP4AAoCAgICAgICAAQCAgICAAAAABQAAAAACgAOAAAMADQARABUAGQAAPQEzHQE1ITUhNSE1MxEBNSEVATUzFTM1MxWAAYD+gAGAgP4AAYD+gICAgICAgICAgICA/gACAICAAQCAgICAAAAAAAQAAAAAAoADgAADAA0AEQAVAAA9ATMdATUhNSE1ITUzEQE1IRUBNTMVgAGA/oABgID+AAGA/wCAgICAgICAgID+AAIAgIABAICAAAAEAAAAAAKAAoAAAwAVABkAHQAAPQEzHQE1MzUjNTM1MxUzNTMRIRUhFQE1MxUzNTMVgICAgICAgP8AAQD+AICAgICAgICAgICAgID/AICAAgCAgICAAAAABwAA/4ACgAMAAAMABwALAA8AEwAXABsAAAU1IRU9ATMVJTUhFT0BMxUhETMRATUzFSU1IRUBAAEAgP4AAYCA/YCAAYCA/gABgICAgICAgICAgICAgAGA/oABAICAgICAAAAAAAQAAAAAAoADgAADAA0AEQAVAAAzNSEVJREzFSE1MxEhFRE1IRUBNSEVgAIA/YCAAYCA/gABgP4AAQCAgIABgICA/wCAAYCAgAEAgIAAAAAABAAAAAACgAOAAAMADQARABUAADM1IRUlETMVITUzESEVETUhFQM1IRWAAgD9gIABgID+AAGAgAEAgICAAYCAgP8AgAGAgIABAICAAAYAAAAAAoADgAADAA0AEQAVABkAHQAAMzUhFSURMxUhNTMRIRURNSEVJTUzFSE1MxUlNSEVgAIA/YCAAYCA/gABgP4AgAGAgP4AAYCAgIABgICA/wCAAYCAgICAgICAgICAAAAFAAAAAAKAA4AAAwANABEAFQAZAAAzNSEVJREzFSE1MxEhFRE1IRUBNTMVMzUzFYACAP2AgAGAgP4AAYD+gICAgICAgAGAgID/AIABgICAAQCAgICAAAAAAgAAAAABAAOAAAMABwAAMxEzEQE1IRWAgP8AAQACgP2AAwCAgAAAAAIAAAAAAQADgAADAAcAADERMxEDNSEVgIABAAKA/YADAICAAAQAAAAAAoADgAADAAcACwAPAAAhETMRATUzFSE1MxUlNSEVAQCA/oCAAYCA/gABgAKA/YACgICAgICAgIAAAAADAIAAAAIAA4AAAwAHAAsAACERMxEBNTMVMzUzFQEAgP8AgICAAoD9gAMAgICAgAAEAAAAAAMAA4AAAwAPABMAFwAAIREzESERMxUhNSEVIxUhGQE1IRUhNTMVAgCA/YCAAQABAID+gAEAAQCAAgD+AAMAgICAgP4AAwCAgICAAAUAAAAAAoADgAADAAcACwAPABMAADM1IRUlETMRIREzEQE1IRUBNSEVgAGA/gCAAYCA/gABgP4AAQCAgIABgP6AAYD+gAGAgIABAICAAAAABQAAAAACgAOAAAMABwALAA8AEwAAMzUhFSURMxEhETMRATUhFQM1IRWAAYD+AIABgID+AAGAgAEAgICAAYD+gAGA/oABgICAAQCAgAAAAAAHAAAAAAKAA4AAAwAHAAsADwATABcAGwAAMzUhFSURMxEhETMRATUhFSU1MxUhNTMVJTUhFYABgP4AgAGAgP4AAYD+AIABgID+AAGAgICAAYD+gAGA/oABgICAgICAgICAgIAABwAAAAADAAOAAAMABwALAA8AFwAbAB8AADM1IRUlETMRIREzEQE1Mx0BNSE1IRUjFQE1IRUhNTMVgAGA/gCAAYCA/YCAAQABAID+gAEAAQCAgICAAYD+gAGA/oACAICAgICAgIABAICAgIAABgAAAAACgAOAAAMABwALAA8AEwAXAAAzNSEVJREzESERMxEBNSEVATUzFTM1MxWAAYD+AIABgID+AAGA/oCAgICAgIABgP6AAYD+gAGAgIABAICAgIAAAAMAAACAAoADAAADAAcACwAAJTUzFQE1IRUBNTMVAQCA/oACgP6AgICAgAEAgIABAICAAAADAAAAAAKAAoAAAwANABcAAAE1MxUBNSMRMxEzFSEVNREjNSE1IRUzEQEAgP8AgICAAQCA/wABgIABAICA/wCAAYD/AICAgAEAgICA/oAAAAMAAAAAAoADgAADAAkADQAANREzERU1IREzEQE1IRWAAYCA/YABAIACAP4AgIACAP2AAwCAgAAAAwAAAAACgAOAAAMACQANAAA1ETMRFTUhETMRATUhFYABgID/AAEAgAIA/gCAgAIA/YADAICAAAAFAAAAAAKAA4AAAwAJAA0AEQAVAAA1ETMRFTUhETMRATUzFSE1MxUlNSEVgAGAgP2AgAGAgP4AAYCAAYD+gICAAYD+AAKAgICAgICAgAAAAAQAAAAAAoADgAADAAkADQARAAA1ETMRFTUhETMRATUzFTM1MxWAAYCA/gCAgICAAgD+AICAAgD9gAMAgICAgAAEAAD/gAKAA4AAAwAHAA8AEwAAFzUhFQERMxEBNSE1IREzEQE1IRWAAYD+AIABgP6AAYCA/YABAICAgAGAAYD+gP8AgIABgP2AAwCAgAAAAAMAAP+AAoADgAADAAcAEwAAJREzEQE1IRUBETMRMxUjESEVIRUCAID+gAEA/gCAgIABgP6AgAGA/oABgICA/YAEAP6AgP8AgIAAAAAFAAD/gAKAA4AAAwAHAA8AEwAXAAAXNSEVAREzEQE1ITUhETMRATUzFTM1MxWAAYD+AIABgP6AAYCA/gCAgICAgIABgAGA/oD/AICAAYD9gAMAgICAgAAAAgAAAAACgAOAAAMAEwAANREzERU1MxEjNSEVIRUzFSMRIRWAgIACAP8AgIABAIACgP2AgIACgICAgID+gIAAAAUAAAAAAoACgAADAAcACwAPABsAADM1MxUzNSEVJREzGQE1MxUZATMVMzUjNSERIRWAgIABAP2AgICAgIABAP8AgICAgIABgP6AAYCAgP6AAYCAgID+gIAAAAAABwAAAAACgAOAAAMABwALAA8AEwAXABsAACERMxEBNTMVMzUzFSU1MxUhNTMVATUzFTM1MxUBAID/AICAgP4AgAGAgP4AgICAAYD+gAGAgICAgICAgICAAQCAgICAAAAAAQAAAYADAAIAAAMAABE1IRUDAAGAgIAAAgAAAgABAAOAAAMABwAAGQEzGQE1MxWAgAIAAQD/AAEAgIAAAgAAAgABAAOAAAMABwAAETUzFTURMxGAgAIAgICAAQD/AAAAAgAA/4ABAAEAAAMABwAAFTUzFTURMxGAgICAgIABAP8AAAAAAgAAAgABAAOAAAMABwAAEzUzFSURMxGAgP8AgAIAgICAAQD/AAAAAAQAAAIAAgADgAADAAcACwAPAAAZATMRMxEzEQE1MxUzNTMVgICA/wCAgIACAAEA/wABAP8AAQCAgICAAAQAAAIAAgADgAADAAcACwAPAAARNTMVMzUzFSURMxEzETMRgICA/wCAgIACAICAgICAAQD/AAEA/wAAAAQAAP+AAgABAAADAAcACwAPAAAVNTMVMzUzFSURMxEzETMRgICA/wCAgICAgICAgIABAP8AAQD/AAAAAAEAAAAAAYADAAALAAAzESM1MxEzETMVIxGAgICAgIABgIABAP8AgP6AAAAAAQAAAYABAAKAAAMAABkBIREBAAGAAQD/AAAAAAMAAAAAAoAAgAADAAcACwAAMTUzFTM1MxUzNTMVgICAgICAgICAgIAAAAAAAwAAAAABAAGAAAMABwALAAAzNTMVJTUzFT0BMxWAgP8AgICAgICAgICAgAADAAAAAAEAAYAAAwAHAAsAADE1MxU9ATMVJTUzFYCA/wCAgICAgICAgIAAAAMAAAAAAoADgAADABcAGwAAITUhFSU1IzUzNSM1MzUzFSEVIRUhFSEVETUhFQEAAYD+AICAgICAAQD/AAEA/wABgICAgICAgICAgICAgIACgICAAAIAAAIABIADgAAHABMAABMRIzUhFSMRIREhESMRIxUjNSMRgIABgIABAAKAgICAgAIAAQCAgP8AAYD+gAEAgID/AAAAAAAiAZ4AAQAAAAAAAAAZAAAAAQAAAAAAAQAJAIYAAQAAAAAAAgAHADcAAQAAAAAAAwAUABkAAQAAAAAABAARAC0AAQAAAAAABQALAD4AAQAAAAAABgAJAIYAAQAAAAAABwA8AEkAAQAAAAAACAAeAMIAAQAAAAAACQAKAAoAAQAAAAAACgAmAIUAAQAAAAAACwAXAKsAAQAAAAAADAA5AMIAAQAAAAAADQAoAPsAAQAAAAAADgAuASMAAQAAAAAAEwApAVEAAQAAAAABAAAIAXoAAwABBAkAAAJKAqwAAwABBAkAAQASArgAAwABBAkAAgAOAZYAAwABBAkAAwAiAYIAAwABBAkABAAiAYIAAwABBAkABQAWAaQAAwABBAkABgASArgAAwABBAkABwDGAboAAwABBAkACAAsAoAAAwABBAkACQAKAyQAAwABBAkACgJKAqwAAwABBAkACwA+BPYAAwABBAkADAAiBTQAAwABBAkADQBQBVYAAwABBAkADgBcBaYAAwABBAkAEwA2BgIAAwABBAkBAAAQBjhDb3B5cmlnaHQgYm9iZ3JhdHRvbiAyMDEwRm9udFN0cnVjdCBNaW5lY3JhZnRNaW5lY3JhZnQgUmVndWxhclZlcnNpb24gMS4wRm9udFN0cnVjdCBpcyBhIHRyYWRlbWFyayBvZiBGU0kgRm9udFNob3AgSW50ZXJuYXRpb25hbCBHbWJIHE1pbmVjcmFmdB0gd2FzIGJ1aWx0IHdpdGggRm9udFN0cnVjdApodHRwOi8vd3d3LmZvbnRzaG9wLmNvbWh0dHA6Ly9mb250c3RydWN0LmZvbnRzaG9wLmNvbS9mb250c3RydWN0aW9ucy9zaG93LzM5NDEzM0NyZWF0aXZlIENvbW1vbnMgQXR0cmlidXRpb24gU2hhcmUgQWxpa2VodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS1zYS8zLjAvRml2ZSBiaWcgcXVhY2tpbmcgemVwaHlycyBqb2x0IG15IHdheCBiZWRBUUFNZEZwbgBNAGkAbgBlAGMAcgBhAGYAdAAgAFIAZQBnAHUAbABhAHIAVgBlAHIAcwBpAG8AbgAgADEALgAwAFQAaABlACAAIgBEAGoARABDAEgAIgAgAG4AYQBtAGUAIABpAHMAIABvAHcAbgAgAGIAeQAgAG0AZQAgACgAZABqAGQAYwBoAC4AYwBvAG0AKQAuAA0ACgANAAoAVABoAGUAIAAiAE0AaQBuAGUAYwByAGEAZgB0ACIAIABnAGEAbQBlACAAaQBzACAAbwB3AG4AIABiAHkAIABNAG8AagBhAG4AZwAgAFMAcABlAGMAaQBmAGkAYwBhAHQAaQBvAG4AcwAuAEYAbwBuAHQAcwB0AHIAdQBjAHQAIABiAHkAIABGAG8AbgB0AFMAaABvAHAAVABoAGkAcwAgACIATQBpAG4AZQBjAHIAYQBmAHQAIgAgAGYAbwBuAHQAIAB3AGEAcwAgAGEAZABhAHAAdABlAGQAIABpAG4AdABvACAAVAByAHUAZQBUAHkAcABlACAAZgBpAGwAZQAgAGIAeQAgAG0AZQAgACgARABqAEQAQwBIACkALgANAAoADQAKAFQAaABpAHMAIAAiAE0AaQBuAGUAYwByAGEAZgB0ACIAIABmAG8AbgB0ACAAaQBzACAAdQBuAGQAZQByACAAQwByAGUAYQB0AGkAdgBlACAAQwBvAG0AbQBvAG4AcwAgAEwAaQBjAGUAbgBzAGUAIAAoAFMAaABhAHIAZQAgAEEAbABpAGsAZQApAC4ADQAKAA0ACgBUAGgAZQAgACIARABqAEQAQwBIACIAIABuAGEAbQBlACAAaQBzACAAbwB3AG4AIABiAHkAIABtAGUAIAAoAGQAagBkAGMAaAAuAGMAbwBtACkALgANAAoADQAKAFQAaABlACAAIgBNAGkAbgBlAGMAcgBhAGYAdAAiACAAZgBvAG4AdAAgAHMAdAB5AGwAZQAgAHcAYQBzACAAbQBhAGQAZQAgAGIAeQAgAE4AbwB0AGMAaAAuAA0ACgANAAoAVABoAGUAIAAiAE0AaQBuAGUAYwByAGEAZgB0ACIAIABnAGEAbQBlACAAaQBzACAAbwB3AG4AIABiAHkAIABNAG8AagBhAG4AZwAgAFMAcABlAGMAaQBmAGkAYwBhAHQAaQBvAG4AcwAuAGgAdAB0AHAAOgAvAC8AZgBvAG4AdABzAHQAcgB1AGMAdAAuAGYAbwBuAHQAcwBoAG8AcAAuAGMAbwBtAC8AaAB0AHQAcAA6AC8ALwBkAGoAZABjAGgALgBjAG8AbQAvAEMAcgBlAGEAdABpAHYAZQAgAEMAbwBtAG0AbwBuAHMAIABBAHQAdAByAGkAYgB1AHQAaQBvAG4AIABTAGgAYQByAGUAIABBAGwAaQBrAGUAaAB0AHQAcAA6AC8ALwBjAHIAZQBhAHQAaQB2AGUAYwBvAG0AbQBvAG4AcwAuAG8AcgBnAC8AbABpAGMAZQBuAHMAZQBzAC8AYgB5AC0AcwBhAC8AMwAuADAALwBNAGkAbgBlAGMAcgBhAGYAdAAgAGkAcwAgAGoAdQBzAHQAIABhAHcAZQBzAG8AbQBlACAAIQBBAFEAQQBNAGQARgBwAG4AAAADAAAAAAAAAGYAMwAAAAAAAAAAAAAAAAAAAAAAAAAA";
ff = new java.io.File(path + "minecraft.ttf");
if (ff.exists())
    ff.delete();
ff.createNewFile();
fs = new java.io.FileOutputStream(ff);
fs.write(android.util.Base64.decode(fontString, 0));
fs.close();
font = new android.graphics.Typeface.createFromFile(path + "/minecraft.ttf");

function button(text) {
    var btnd = new android.widget.Button(ctx);
    btnd.setText(text);
    btnd.setOnTouchListener(new android.view.View.OnTouchListener() {
        onTouch: function(v, event) {
            var action = event.getActionMasked();
            if (action == android.view.MotionEvent.ACTION_CANCEL || action == android.view.MotionEvent.ACTION_UP) {
                var bNP = new android.graphics.drawable.BitmapDrawable(btnNpUI);
                bNP.setFilterBitmap(false);
                bNP.setAntiAlias(false);
                btnd.setBackgroundDrawable(bNP);
                btnd.setTextColor(android.graphics.Color.parseColor("#FFDDDDDD"));
                btnd.setPadding(0, 0, 0, 0);
            } else {
                var bNP = new android.graphics.drawable.BitmapDrawable(btnPUI);
                bNP.setFilterBitmap(false);
                bNP.setAntiAlias(false);
                btnd.setBackgroundDrawable(bNP);
                btnd.setTextColor(android.graphics.Color.parseColor("#FFFBFF97"));
                btnd.setPadding(0, Math.round(btnd.getLineHeight() / 8), 0, 0);
            }
            return false;
        }
    });
    var bNP = new android.graphics.drawable.BitmapDrawable(btnNpUI);
    bNP.setFilterBitmap(false);
    bNP.setAntiAlias(false);
    btnd.setBackgroundDrawable(bNP);
    btnd.setPaintFlags(btnd.getPaintFlags() | android.graphics.Paint.SUBPIXEL_TEXT_FLAG);
    btnd.setTextSize(14);
    btnd.setTypeface(font);
    btnd.setTextColor(android.graphics.Color.parseColor("#FFDDDDDD"));
    btnd.setShadowLayer(1, Math.round(btnd.getLineHeight() / 8), Math.round(btnd.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
    btnd.setPadding(0, 0, 0, 0);
    btnd.setLineSpacing(0, 1.15);
    return btnd;
}

function craftUI(tool) {
    ModPE.setGameSpeed(4);
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var layout = new android.widget.LinearLayout(ctx);
                layout.setOrientation(1);
                var info = new android.widget.TextView(ctx);
                info.setGravity(android.view.Gravity.CENTER);
                info.setText("There's no " + tool[0] + " in your inventory.\nI can craft one if you want!\n");
                info.setTextColor(android.graphics.Color.WHITE);
                info.setTypeface(font);
                info.setTextSize(14);
                info.setLineSpacing(0, 1.15);
                layout.addView(info);
                var yesButton = button("Ok, go on!");
                //yesButton.setHeight(100);
                //yesButton.setWidth(50);
                yesButton.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        craft(tool);
                        ModPE.showTipMessage("Item crafted!");
                        GUI.dismiss();
                        GUI = null;
                        ModPE.setGameSpeed(20);
                        Level.playSoundEnt(getPlayerEnt(), "random.click", 100, 100);
                    }
                }));
                layout.addView(yesButton);
                var noButton = button("Nope, thanks");
                noButton.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        GUI.dismiss();
                        GUI = null;
                        ModPE.setGameSpeed(20);
                        Level.playSoundEnt(getPlayerEnt(), "random.click", 100, 100);
                    }
                }));
                layout.addView(noButton);
                GUI = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
                GUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
                GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER, 0, 0);
                //GUI.setWidth(150);
            } catch (err) {
                print("An error occured: " + err);
            }
        }
    }));
}
