/* Made by Incognito.
===[ AimBot ]===
Do not distribute without the written permision of Incognito. No modification or copying is allowed, and any unallowed copies shall be ceased. */
Yplus = 3.5;


function newLevel() {

    Yplus = 3.5;

}

function leaveGame() {

    Yplus = 2;

}



function entityAddedHook(e) {




    var mobs = Entity.getAll();

    for (var i = 0; i < mobs.length; i++) {




        var xq = Entity.getX(mobs[i]) - getPlayerX();

        var yq = Entity.getY(mobs[i]) - getPlayerY();

        var zq = Entity.getZ(mobs[i]) - getPlayerZ();




        var xMob = Entity.getX(mobs[i])

        var yMob = Entity.getY(mobs[i])

        var zMob = Entity.getZ(mobs[i])




        var x = getPlayerX()

        var y = getPlayerY()

        var z = getPlayerZ()




        PlayerYaw = getYaw(Player.getEntity())

        MobYaw = getYaw(mobs[i])


        if (xq * xq + yq * yq + zq * zq <= 55 * 55 && mobs[i] != getPlayerEnt()) {

            if (Entity.getEntityTypeId(e) == 80) {
                if (Entity.getEntityTypeId(mobs[i]) != 80) {
                    if (Entity.getEntityTypeId(mobs[i]) != 64) {
                        if (Entity.getEntityTypeId(mobs[i]) != 65) {
                            if (Entity.getEntityTypeId(mobs[i]) != 66) {




                                if (xMob > x && zMob > z) {
                                    if (PlayerYaw > 270 && PlayerYaw < 360) {

                                        setVelX(e, 0);
                                        setVelY(e, -2);
                                        setVelZ(e, 0);

                                        Entity.setPosition(e, xMob, yMob + Yplus, zMob);


                                    }
                                }




                                if (xMob < x && zMob > z) {
                                    if (PlayerYaw > 0 && PlayerYaw < 90) {




                                        setVelX(e, 0);
                                        setVelY(e, -2);
                                        setVelZ(e, 0);



                                        Entity.setPosition(e, xMob, yMob + Yplus, zMob);


                                    }
                                }




                                if (xMob < x && zMob < z) {
                                    if (PlayerYaw > 90 && PlayerYaw < 180) {


                                        setVelX(e, 0);
                                        setVelY(e, -2);
                                        setVelZ(e, 0);

                                        Entity.setPosition(e, xMob, yMob + Yplus, zMob);




                                    }
                                }




                                if (xMob > x && zMob < z) {
                                    if (PlayerYaw > 180 && PlayerYaw < 270) {


                                        setVelX(e, 0);
                                        setVelY(e, -2);
                                        setVelZ(e, 0);


                                        Entity.setPosition(e, xMob, yMob + Yplus, zMob);


                                    }
                                }


                            }
                        }
                    }
                }
            }
        }
    }
}




function modTick() {


    if (Entity.getYaw(getPlayerEnt()) >= 360) {
        Entity.setRot(getPlayerEnt(), Entity.getYaw(getPlayerEnt()) - 360, Entity.getPitch(getPlayerEnt()))
    } else if (Entity.getYaw(getPlayerEnt()) < 0) {
        Entity.setRot(getPlayerEnt(), Entity.getYaw(getPlayerEnt()) + 360, Entity.getPitch(getPlayerEnt()))
    }




}
