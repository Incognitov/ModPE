/* Made by Incognito.
===[ SeekingParticles ]===
Do not distribute without the written permision of Incognito. No modification or copying is allowed, and any unallowed copies shall be ceased. */
var sp

function modTick() {
    if (sp != null) {
        x = Player.getX()
        z = Player.getZ()
        for (y = Player.getY() - 1.2; y <= Player.getY() - 0.3; y = y + 0.1) {
            if (sp == "crit") {
                Level.addParticle(ParticleType.crit, x, y, z, 0, 0, 0, 1)
            }
            if (sp == "redstone") {
                Level.addParticle(ParticleType.redstone, x, y, z, 0, 0, 0, 1)
            }
            if (sp == "cloud") {
                Level.addParticle(ParticleType.cloud, x, y, z, 0, 0, 0, 1)
            }
            if (sp == "flame") {
                Level.addParticle(ParticleType.flame, x, y, z, 0, 0, 0, 1)
            }
        }
    }
}

function procCmd(command) {
    var cmd = command.split(" ");
    if (cmd[0] == "sp") {
        if (cmd[1] == "crit" || cmd[1] == "redstone" || cmd[1] == "cloud" || cmd[1] == "flame") {
            sp = cmd[1]
        } else if (cmd[1] == "off") {
            sp = null
        } else {
            clientMessage("§6Please use the format '/sp <type>.'")
            clientMessage("§6Particles: Crit, redstone, cloud and flame.")
            clientMessage("§6'/sp off' removes all particles.")
        }
    }
}
