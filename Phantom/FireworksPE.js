/* Made by Incognito.
===[ Fireworks ]===
Do not distribute without the written permision of Incognito. No modification or copying is allowed, and any unallowed copies shall be ceased. */
var sdcard = android.os.Environment.getExternalStorageDirectory();

var firework = [],
    launcherId = 94,
    items = [
        [445, "blaze_powder", 0, "fountain (small)", [" C", "PGP"], 500, function(x, y, z) {
            firework[firework.length] = new Point(x, y, z, 8, 0, 100);
            firework[firework.length] = new Fountain(x, y, z, 5, 100, 500, 3, 50, 0, 0.15, 0, 0.05);
        }],
        [446, "blaze_powder", 0, "fountain (big)", [" C", "PGP"], 600, function(x, y, z) {
            firework[firework.length] = new Point(x, y, z, 8, 0, 100);
            firework[firework.length] = new Point(x, y, z, 6, 150, 600);
            firework[firework.length] = new Fountain(x, y, z, 5, 100, 700, 6, 50, 0, 0.3, 0, 0.1);
            firework[firework.length] = new Sound(x, y, z, "fire.fire", 150, 600, 30, 0.5, 1);
        }],
        [447, "blaze_powder", 0, "fountain (triple)", [" C", "PGP"], 600, function(x, y, z) {
            var xVel = Math.random() - 0.5,
                zVel = Math.random() - 0.5,
                k = 0.15 / Math.sqrt(xVel * xVel + zVel * zVel);
            firework[firework.length] = new Point(x, y, z, 8, 0, 100);
            firework[firework.length] = new Point(x, y, z, 6, 150, 600);
            firework[firework.length] = new Fountain(x, y, z, 5, 100, 700, 5, 70, 0, 0.25, 0, 0.1);
            firework[firework.length] = new Fountain(x, y, z, 5, 120, 700, 5, 50, k * xVel, 0.2, k * zVel, 0.1);
            firework[firework.length] = new Fountain(x, y, z, 5, 120, 700, 5, 50, -k * xVel, 0.2, -k * zVel, 0.1);
            firework[firework.length] = new Sound(x, y, z, "fire.fire", 150, 600, 30, 0.5, 1);
        }],
        [448, "blaze_powder", 0, "fireball", ["PG"], 250, function(x, y, z) {
            firework[firework.length] = new Point(x, y, z, 8, 0, 100);
            firework[firework.length] = new Line(x, y, z, 5, 100, 50, 5, 0, 0.2, 0, 0, 0, 0, 0.05, 0.004);
            firework[firework.length] = new Ball(x, y + 5, z, 5, 150, 200, 10, 0.1);
            firework[firework.length] = new Sound(x, y + 5, z, "fire.fire", 150, 150, 30, 0.5, 1);
            firework[firework.length] = new Ball(x, y + 5, z, 5, 350, 1, 100, 0.3);
        }],
        [449, "fireworks", 0, "rocket (trail)", ["PGD"], 100, function(x, y, z) {
            var i = 15,
                hMax = (Math.random() * 9 + 16),
                yEnd = hMax - (Math.random() * 6),
                a = 0.02, //gravity
                vy = Math.sqrt(2 * a * hMax),
                vx = (Math.random() - 0.5) * 0.32,
                vz = (Math.random() - 0.5) * 0.32,
                time = ((Math.random() > 0.5) ? 1 : -1) * Math.sqrt((2 * (hMax - yEnd)) / a) + (vy / a),
                xEnd = vx * time,
                zEnd = vz * time;
            firework[firework.length] = new Point(x, y, z, 8, 0, 100);
            firework[firework.length] = new Line(x, y, z, 5, 100, time, 5, vx, vy, vz, 0, -0.2, 0, 0.1, a);
            while (i--) {
                firework[firework.length] = new Line(xEnd + x, yEnd + y, zEnd + z, 5, 100 + time, Math.random() * 10 + 20, 2, (Math.random() - 0.5) * 0.48, Math.random() * 0.6, (Math.random() - 0.5) * 0.48, 0, -0.1, 0, 0.05, a);
            }
            firework[firework.length] = new Sound(x, y, z, "random.explode", 105 + time, 1, 1, 0.5, 1);
        }],
        [450, "fireworks", 0, "rocket (ball)", ["PG"], 100, function(x, y, z) {
            var hMax = (Math.random() * 9 + 16),
                yEnd = hMax - (Math.random() * 6),
                a = 0.02, //gravity
                vy = Math.sqrt(2 * a * hMax),
                vx = (Math.random() - 0.5) * 0.32,
                vz = (Math.random() - 0.5) * 0.32,
                time = ((Math.random() > 0.5) ? 1 : -1) * Math.sqrt((2 * (hMax - yEnd)) / a) + (vy / a);
            firework[firework.length] = new Point(x, y, z, 8, 0, 100);
            firework[firework.length] = new Line(x, y, z, 5, 100, time, 1, vx, vy, vz, 0, -0.3, 0, 0.05, a);
            firework[firework.length] = new Ball(vx * time + x, yEnd + y, vz * time + z, 5, 100 + time, 2, 100, 0.3);
            firework[firework.length] = new Sound(x, y, z, "random.explode", 105 + time, 1, 1, 0.5, 1);
        }],
        [451, "fireworks", 0, "rocket (special ball)", ["PGR"], 100, function(x, y, z) {
            var hMax = (Math.random() * 5 + 20),
                yEnd = hMax - (Math.random() * 6),
                a = 0.02, //gravity
                vy = Math.sqrt(2 * a * hMax),
                vx = (Math.random() - 0.5) * 0.32,
                vz = (Math.random() - 0.5) * 0.32,
                time = ((Math.random() > 0.5) ? 1 : -1) * Math.sqrt((2 * (hMax - yEnd)) / a) + (vy / a);
            firework[firework.length] = new Point(x, y, z, 8, 0, 100);
            firework[firework.length] = new Line(x, y, z, 5, 100, time, 1, vx, vy, vz, 0, -0.3, 0, 0.05, a);
            firework[firework.length] = new Ball(vx * time + x, yEnd + y, vz * time + z, 5, 100 + time, 1, 100, 0.2);
            firework[firework.length] = new Sphere(vx * time + x, yEnd + y, vz * time + z, 6, 105 + time, 5, 100, 4, 0);
            firework[firework.length] = new Sound(x, y, z, "random.explode", 110 + time, 1, 1, 0.5, 1);
        }],
        [452, "fireworks", 0, "rocket (circle)", ["PG", "PG"], 100, function(x, y, z) {
            var i = 20,
                hMax = (Math.random() * 5 + 20),
                yEnd = y + hMax - (Math.random() * 6),
                a = 0.02, //gravity
                vy = Math.sqrt(2 * a * hMax),
                vx = (Math.random() - 0.5) * 0.32,
                vz = (Math.random() - 0.5) * 0.32,
                time = ((Math.random() > 0.5) ? 1 : -1) * Math.sqrt((2 * (hMax - yEnd + y)) / a) + (vy / a),
                xEnd = vx * time + x,
                zEnd = vz * time + z,
                v = [Math.random() - 0.5, Math.random() * 0.2 || 0.01, Math.random() - 0.5], //vector v, w
                w = [Math.random() - 0.5, Math.random() * 0.2, 0],
                radius = 0.2,
                temp,
                kv,
                kw,
                xVel,
                yVel,
                zVel,
                time2 = 25;
            w[2] = -(v[0] * w[0] + v[1] * w[1]) / v[2];
            temp = radius / Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
            v[0] *= temp;
            v[1] *= temp;
            v[2] *= temp;
            temp = radius / Math.sqrt(w[0] * w[0] + w[1] * w[1] + w[2] * w[2]);
            w[0] *= temp;
            w[1] *= temp;
            w[2] *= temp;
            firework[firework.length] = new Point(x, y, z, 8, 0, 100);
            firework[firework.length] = new Line(x, y, z, 5, 100, time, 1, vx, vy, vz, 0, -0.3, 0, 0.05, a);
            while (i--) {
                temp = Math.random() * 2 * Math.PI;
                kv = Math.sin(temp);
                kw = Math.cos(temp);
                xVel = kv * v[0] + kw * w[0];
                yVel = kv * v[1] + kw * w[1];
                zVel = kv * v[2] + kw * w[2];
                //firework[firework.length] = new Line(xEnd, yEnd, zEnd, 5, 100 + time, time2, 1, xVel, yVel, zVel, 0, -0.1, 0, 0.05, a);
                firework[firework.length] = new Ball(xEnd + xVel * time2, yEnd + yVel * time2 - (a / 2 * time2 * time2), zEnd + zVel * time2, 5, 100 + time + time2 + (Math.random() * 10), 1, 50, 0.05);
            }
            firework[firework.length] = new Sound(x, y, z, "random.explode", 105 + time, 1, 1, 0.5, 1);
        }],
        [453, "fireworks", 0, "rocket (stripe)", ["PG"], 100, function(x, y, z) {
            var hMax = (Math.random() * 5 + 20),
                yEnd = hMax - (Math.random() * 6),
                a = 0.02, //gravity
                vy = Math.sqrt(2 * a * hMax);
            firework[firework.length] = new Point(x, y, z, 8, 0, 100);
            firework[firework.length] = new Line(x, y, z, 5, 100, (vy / a) - Math.sqrt((2 * (hMax - yEnd)) / a), 8, (Math.random() - 0.5) * 0.1, vy, (Math.random() - 0.5) * 0.1, 0, -0.3, 0, 0.15, a);
        }],
        [454, "fireworks", 0, "rocket (wheel)", ["PGI"], 200, function(x, y, z) {
            var hMax = (Math.random() * 5 + 25),
                yEnd = hMax - (Math.random() * 5),
                a = 0.02, //gravity
                vy = Math.sqrt(2 * a * hMax),
                vx = (Math.random() - 0.5) * 0.16,
                vz = (Math.random() - 0.5) * 0.16,
                time = ((Math.random() > 0.5) ? 1 : -1) * Math.sqrt((2 * (hMax - yEnd)) / a) + (vy / a);
            firework[firework.length] = new Point(x, y, z, 8, 0, 100);
            firework[firework.length] = new Line(x, y, z, 5, 100, time, 2, vx, vy, vz, 0, -0.3, 0, 0.05, a);
            firework[firework.length] = new Sun(vx * time + x, yEnd + y, vz * time + z, 5, 100 + time, 200, 8, Math.random() * 360, 150, 0.1, 0.4, -0.4, 0.15, -0.05);
        }],
        [455, "fireworks", 0, "rocket (tall grass)", ["PG"], 80, function(x, y, z) {
            var hMax = (Math.random() * 3 + 13),
                yEnd = hMax - (Math.random() * 2) - 6,
                a = 0.02, //gravity
                direction = Math.random() * 2 * Math.PI;
            vy = Math.sqrt(2 * a * hMax),
                vx = Math.cos(direction) * (Math.random() * 0.08 + 0.16),
                vz = Math.sin(direction) * (Math.random() * 0.08 + 0.16),
                time = Math.sqrt((2 * (hMax - yEnd)) / a) + (vy / a),
                i;
            firework[firework.length] = new Point(x, y, z, 8, 20, 80);
            for (i = 0; i < 5; i += 1) {
                firework[firework.length] = new Line(x, y, z, 5, i * 3 + 100, time - i, 4, vx, vy, vz, 0, -0.3, 0, 0.05, a);
            }
        }]
    ];

(function() {
    var i;
    for (var i in items) {
        ModPE.setItem(items[i][0], items[i][1], items[i][2], items[i][3]);
        Item.addShapedRecipe(items[i][0], 1, 0, items[i][4], ["G" /*gunpowder*/ , 289, 0, "C" /*coal*/ , 263, 0, "P" /*paper*/ , 339, 0, "D" /*diamond*/ , 264, 0, "R" /*redstonedust*/ , 331, 0, "I" /*iron*/ , 265, 0]);
        Player.addItemCreativeInv(items[i][0], 1);
    }
    Block.defineBlock(launcherId, "firework launcher", [
        ["piston_bottom", 0],
        ["piston_inner", 0],
        ["piston_bottom", 0],
        ["piston_bottom", 0],
        ["piston_bottom", 0],
        ["piston_bottom", 0]
    ]);
    Block.setDestroyTime(launcherId, 2);
    Block.setExplosionResistance(launcherId, 30);
    Block.setColor(launcherId, [0xffffff, 0xffbebe]);
    Item.addShapedRecipe(launcherId, 1, 0, ["GFG", "GRG", "GGG"], ["G", 4, 0, "F", 259, 0, "R", 331, 0]);
    Player.addItemCreativeInv(launcherId, 1);
}());

// ###########################
// hook functions
// ###########################

function useItem(x, y, z, itemId, blockId, side, itemDamage, blockDamage) {
    var slot;
    if (side === 1 && blockId !== 54 && blockId !== 61 && blockId !== 62 && blockId !== 58 && blockId !== 245 && blockId !== 64 && blockId !== 71 && blockId !== 96 && blockId !== 107 && blockId !== 92 && blockId !== 26 && blockId !== 247 && blockId !== 283 && blockId !== 284 && blockId !== 285 && blockId !== 286 && blockId !== 287 && blockId !== launcherId) {
        for (i = items.length - 1; i >= 0; i -= 1) {
            if (items[i][0] === itemId) {
                if (Level.getGameMode() !== 1) {
                    Entity.setCarriedItem(Player.getEntity(), Player.getCarriedItem(), Player.getCarriedItemCount() - 1, Player.getCarriedItemData())
                }
                Level.playSound(x, y, z, "fire.ignite", 1, 1);
                items[i][6](x + 0.5, y + 1, z + 0.5);
                return;
            }
        }
    }
    if (blockId === launcherId) {
        preventDefault();
        if (Level.getData(x, y, z)) {
            Level.setTile(x, y, z, launcherId, 0);
        } else {
            Level.setTile(x, y, z, launcherId, 1);
            firework[firework.length] = new Launcher(x, y, z);
        }
    } else if (blockId === 54 && Level.getGameMode() === 1) {
        for (i = items.length - 1; i >= 0; i -= 1) {
            if (items[i][0] === itemId) {
                for (slot = 0; slot < 27; slot += 1) {
                    if (!Level.getChestSlot(x, y, z, slot)) {
                        Level.setChestSlot(x, y, z, slot, itemId, 0, 32);
                        clientMessage("Added firework to the chest.");
                        return;
                    }
                }
                clientMessage("Chest is full.");
            }
        }
    }
}

function modTick() {
    var i = firework.length;
    while (i--) {
        if (firework[i].tick()) {
            firework.splice(i, 1);
        }
    }
}

function leaveGame() {
    firework = [];
}

function procCmd(cmd) {
    if (cmd.toLowerCase() === "stopfirework") {
        firework = [];
        clientMessage("Fireworks were ceased.");
    }
}

// ######################################
// firework object constructors
// ######################################

function Particle(x, y, z, type, start, xVel, yVel, zVel) {
    this.x = x || Player.getX();
    this.y = y || Player.getY();
    this.z = z || Player.getZ();
    this.xVel = xVel || 0;
    this.yVel = yVel || 0;
    this.zVel = zVel || 0;
    this.type = type || 6;
    this.count = 0;
    this.start = start || 0;
}
Particle.prototype.tick = function() {
    if ((this.count += 1) > this.start) {
        Level.addParticle(this.type, this.x, this.y, this.z, this.xVel, this.yVel, this.zVel, 1);
        return true;
    }
};

function Point(x, y, z, type, start, duration) {
    start = start || 0;
    duration = duration || 100;
    this.x = x || Player.getX();
    this.y = y || Player.getY();
    this.z = z || Player.getZ();
    this.type = type || 8;
    this.count = 0;
    this.start = start;
    this.end = start + duration;
}
Point.prototype.tick = function() {
    if (this.count < this.start) {} else if (this.count < this.end) {
        Level.addParticle(this.type, this.x, this.y, this.z, 0, 0, 0, 1);
    } else {
        return true;
    }
    this.count += 1;
};

function Ball(x, y, z, type, start, duration, particleCount, radius) {
    start = start || 0;
    duration = duration || 1;
    this.x = x || Player.getX();
    this.y = y || Player.getY();
    this.z = z || Player.getZ();
    this.type = type || 5;
    this.particleCount = particleCount || 50;
    this.radius = radius || 1;
    this.count = 0;
    this.start = start;
    this.end = start + duration;
}
Ball.prototype.tick = function() {
    var i, xVel, yVel, zVel, k, x, y, z, type;
    if (this.count < this.start) {} else if (this.count < this.end) {
        i = this.particleCount;
        x = this.x;
        y = this.y;
        z = this.z;
        type = this.type;
        while (i--) {
            xVel = Math.random() - 0.5;
            yVel = Math.random() - 0.5;
            zVel = Math.random() - 0.5;
            k = this.radius / Math.sqrt(xVel * xVel + yVel * yVel + zVel * zVel);
            Level.addParticle(type, x, y, z, k * xVel, k * yVel, k * zVel, 1);
        }
    } else {
        return true;
    }
    this.count += 1;
};

function Sphere(x, y, z, type, start, duration, particleCount, radius, yVel) {
    start = start || 0;
    duration = duration || 1;
    this.x = x || Player.getX();
    this.y = y || Player.getY();
    this.z = z || Player.getZ();
    this.yVel = yVel || 0;
    this.type = type || 5;
    this.particleCount = particleCount || 50;
    this.radius = radius || 1;
    this.count = 0;
    this.start = start;
    this.end = start + duration;
}
Sphere.prototype.tick = function() {
    var i, x2, y2, z2, k, x, y, z, type;
    if (this.count < this.start) {} else if (this.count < this.end) {
        i = this.particleCount;
        x = this.x;
        y = this.y;
        z = this.z;
        yVel = this.yVel
        type = this.type;
        while (i--) {
            x2 = Math.random() - 0.5;
            y2 = Math.random() - 0.5;
            z2 = Math.random() - 0.5;
            k = this.radius / Math.sqrt(x2 * x2 + y2 * y2 + z2 * z2);
            Level.addParticle(type, k * x2 + x, k * y2 + y, k * z2 + z, 0, yVel, 0, 1);
        }
    } else {
        return true;
    }
    this.count += 1;
};

function Line(x, y, z, type, start, duration, particleCount, x2, y2, z2, xVel, yVel, zVel, tolerance, g) {
    start = start || 0;
    duration = duration || 10;
    particleCount = particleCount || 5;
    this.x = x || Player.getX();
    this.y = y || Player.getY();
    this.z = z || Player.getZ();
    this.x2 = x2 / particleCount || 0;
    this.y2 = y2 / particleCount || 0;
    this.z2 = z2 / particleCount || 0;
    this.xVel = xVel || 0;
    this.yVel = yVel || 0;
    this.zVel = zVel || 0;
    this.tolerance = tolerance || 0;
    this.type = type || 5;
    this.particleCount = particleCount;
    this.g = g || 0;
    this.count = 0;
    this.start = start;
    this.end = start + duration;
}
Line.prototype.tick = function() {
    var i, particleCount, type, x, y, z, x2, y2, z2, xVel, yVel, zVel, tolerance;
    if (this.count < this.start) {} else if (this.count < this.end) {
        type = this.type;
        particleCount = this.particleCount;
        tolerance = this.tolerance;
        x = this.x;
        y = this.y;
        z = this.z;
        x2 = this.x2;
        y2 = this.y2;
        z2 = this.z2;
        xVel = this.xVel;
        yVel = this.yVel;
        zVel = this.zVel;
        for (i = 0; i < particleCount; i += 1) {
            Level.addParticle(type, x2 * i + x, y2 * i + y, z2 * i + z, tolerance * (Math.random() - 0.5) + xVel, tolerance * (Math.random() - 0.5) + yVel, tolerance * (Math.random() - 0.5) + zVel, 1);
        }
        this.y2 -= this.g / particleCount;
        this.x += x2 * particleCount;
        this.y += y2 * particleCount;
        this.z += z2 * particleCount;
    } else {
        return true;
    }
    this.count += 1;
};

function Fountain(x, y, z, type, start, duration, particleCount, delayTick, xVel, yVel, zVel, tolerance) {
    start = start || 0;
    duration = duration || 400;
    delayTick = delayTick || 0;
    this.x = x || Player.getX();
    this.y = y || Player.getY();
    this.z = z || Player.getZ();
    this.xVelDelta = (xVel / delayTick) || 0;
    this.yVelDelta = (yVel / delayTick) || 0;
    this.zVelDelta = (zVel / delayTick) || 0;
    this.tolerance = (tolerance / delayTick) || 0;
    this.type = type || 5;
    this.particleCount = particleCount || 5;
    this.count = 0;
    this.delayTick = 0;
    this.start = start;
    this.start2 = start + delayTick;
    this.end2 = start + duration - delayTick;
    this.end = start + duration;
}
Fountain.prototype.tick = function() {
    var count = this.count,
        i, type, x, y, z, xVelDelta, yVelDelta, zVelDelta, tolerance, delayTick;
    if (count < this.start) {} else if (count < this.end) {
        type = this.type;
        i = this.particleCount;
        tolerance = this.tolerance;
        delayTick = this.delayTick;
        x = this.x;
        y = this.y;
        z = this.z;
        xVelDelta = this.xVelDelta;
        yVelDelta = this.yVelDelta;
        zVelDelta = this.zVelDelta;
        while (i--) {
            Level.addParticle(type, x, y, z, (tolerance * (Math.random() - 0.5) + xVelDelta) * delayTick, (tolerance * (Math.random() - 0.5) + yVelDelta) * delayTick, (tolerance * (Math.random() - 0.5) + zVelDelta) * delayTick, 1);
        }
        if (count < this.start2) {
            this.delayTick += 1;
        } else if (count >= this.end2) {
            this.delayTick -= 1;
        }

    } else {
        return true;
    }
    this.count += 1;
};

function Sun(x, y, z, type, start, duration, particleCount, angle, delayTick, angularSpeed, xzVel, yVel, tolerance, deltaY) {
    start = start || 0;
    duration = duration || 400;
    delayTick = delayTick || 0;
    this.x = x || Player.getX();
    this.y = y || Player.getY();
    this.z = z || Player.getZ();
    this.xzVelDelta = xzVel || 0;
    this.yVelDelta = yVel || 0;
    this.tolerance = tolerance || 0;
    this.type = type || 5;
    this.particleCount = particleCount || 5;
    this.count = 0;
    this.angle = angle || 0;
    this.angularSpeed = 0
    this.delayTick = angularSpeed / delayTick || 1;
    this.deltaY = deltaY || 0;
    this.start = start;
    this.start2 = start + delayTick;
    this.end = start + duration;
}
Sun.prototype.tick = function() {
    var count = this.count,
        i, particleCount, type, x, y, z, xzVelDelta, yVelDelta, tolerance, angularSpeed, angle;
    if (count < this.start) {} else if (count < this.end) {
        type = this.type;
        particleCount = this.particleCount;
        tolerance = this.tolerance;
        x = this.x;
        y = this.y;
        z = this.z;
        angularSpeed = this.angularSpeed;
        xzVelDelta = this.xzVelDelta;
        yVelDelta = this.yVelDelta;
        angle = this.angle;
        for (i = 0; i < particleCount; i += 1) {
            Level.addParticle(type, x, y, z, tolerance * (Math.random() - 0.5) + (Math.cos(i * angularSpeed + angle) * xzVelDelta), tolerance * (Math.random() - 0.5) + yVelDelta, tolerance * (Math.random() - 0.5) + (Math.sin(i * angularSpeed + angle) * xzVelDelta), 1);
        }
        if (count < this.start2) {
            this.angularSpeed += this.delayTick;
        }
        this.angle += angularSpeed * particleCount;
        this.y += this.deltaY;
    } else {
        return true;
    }
    this.count += 1;
};

function Sound(x, y, z, type, start, duration, interval, volume, pitch) {
    start = start || 0;
    duration = duration || 1;
    this.x = x || Player.getX();
    this.y = y || Player.getY();
    this.z = z || Player.getZ();
    this.type = type || "random.explode";
    this.interval = interval || 1;
    this.volume = volume || 1;
    this.pitch = pitch || 0;
    this.count = 0;
    this.start = start;
    this.end = start + duration;
}
Sound.prototype.tick = function() {
    if (this.count < this.start) {} else if (this.count < this.end) {
        if (!(this.count % this.interval)) {
            Level.playSound(this.x, this.y, this.z, this.type, this.volume, this.pitch);
        }
    } else {
        return true;
    }
    this.count += 1;
};

function Launcher(x, y, z) {
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;
    this.count = 0;
    this.start = 0;
}
Launcher.prototype.tick = function() {
    var slot, i, pos, item, fireworkItem, x, y, z;
    if (this.count >= this.start) {
        x = this.x;
        y = this.y;
        z = this.z;
        if (Level.getTile(this.x, this.y, this.z) !== launcherId || Level.getData(this.x, this.y, this.z) !== 1) {
            return true;
        }
        pos = [
            [-1, 0, 0],
            [0, 0, -1],
            [1, 0, 0],
            [0, 0, 1],
            [0, -1, 0]
        ]
        for (i = 0; i < pos.length; i += 1) {
            if (Level.getTile(x + pos[i][0], y + pos[i][1], z + pos[i][2]) === 54) { //if chest
                for (slot = 0; slot < 27; slot += 1) {
                    item = Level.getChestSlot(x + pos[i][0], y + pos[i][1], z + pos[i][2], slot);
                    for (fireworkItem = items.length - 1; fireworkItem >= 0; fireworkItem -= 1) {
                        if (items[fireworkItem][0] === item) { //if firework
                            this.count = 0;
                            this.start = items[fireworkItem][5];
                            if (Level.getChestSlotCount(x + pos[i][0], y + pos[i][1], z + pos[i][2], slot) === 1) {
                                Level.setChestSlot(x + pos[i][0], y + pos[i][1], z + pos[i][2], slot, 0, 0, 0);
                            } else {
                                Level.setChestSlot(x + pos[i][0], y + pos[i][1], z + pos[i][2], slot, item, Level.getChestSlotData(x + pos[i][0], y + pos[i][1], z + pos[i][2], slot), Level.getChestSlotCount(x + pos[i][0], y + pos[i][1], z + pos[i][2], slot) - 1)
                            }
                            items[fireworkItem][6](x + 0.5, y + 1, z + 0.5); //launch firework
                            return;
                        }
                    }
                }
            }
        }
        Level.setTile(x, y, z, launcherId, 0);
        return true;
    }
    this.count += 1;
};
