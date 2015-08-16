/* Made by Incognito.
===[ SeekingParticles ]===
Do not distribute without the written permision of Incognito. No modification or copying is allowed, and any unallowed copies shall be ceased. */
var ctx = com.
function newLevel() {

    var sp

    function modTick() {
        if (sp != null) {
            x = Player.getX()
            z = Player.getZ()
            for (y = Player.getY() - 1.2; y <= Player.getY() - 0.3; y = y + 0.1) {
                if (sp == "redstone") {
                    Level.addParticle(ParticleType.redstone, x, y, z, 0, 0, 0, 5)
                }
                if (sp == "cloud") {
                    Level.addParticle(ParticleType.cloud, x, y, z, 0, 0, 0, 5)
                }
                if (sp == "crit") {
                    Level.addParticle(ParticleType.crit, x, y, z, 0, 0, 0, 5)
                }
                if (sp == "lava") {
                    Level.addParticle(ParticleType.lava, x, y, z, 0, 0, 0, 5)
                }
                if (sp == "spell") {
                    Level.addParticle(ParticleType.spell, x, y, z, 0, 0, 0, 5)
                }
                if (sp == "portal") {
                    Level.addParticle(ParticleType.portal, x, y, z, 1, 1, 1, 5)
                }
                if (sp == "splash") {
                    Level.addParticle(ParticleType.splash, x, y, z, 0, 0, 0, 5)
                }
                if (sp == "snowball") {
                    Level.addParticle(ParticleType.snowballpoof, x, y, z, 0, 0, 0, 5)
                }
                if (sp == "heart") {
                    Level.addParticle(ParticleType.heart, x, y, z, 1, 1, 1, 1)
                }
                if (sp == "smoke") {
                    Level.addParticle(ParticleType.smoke, x, y, z, 0, 0, 0, 5)
                }
            }
        }
    }

    function procCmd(command) {
        var cmd = command.split(" ");
        if (cmd[0] == "sp") {
            if (cmd[1] == "redstone" || cmd[1] == "cloud" || cmd[1] == "crit" || cmd[1] == "lava" || cmd[1] == "spell" || cmd[1] == "portal" || cmd[1] == "splash" || cmd[1] == "snowball" || cmd[1] == "heart" || cmd[1] == "smoke") {
                sp = cmd[1]
            } else if (cmd[1] == "off") {
                sp = null
            } else {
                clientMessage("§6Please use the format /sp (name).")
                clientMessage("§6Particles: redstone, cloud, crit, lava, splash, portal, spell, snowball, smoke.")
                clientMessage("To toggle SP off, do /sp off.")
            }
        }
    }
