const ofwsel = $("#fw");
const cfwsel = $("#cfw");

ofwsel.on("change", () => {
    var ofwval = $("#fw").val();

    if (ofwval == 1) { // 6.61 links from Sony's update server
        const crc32 = "0ae6e35a";
        const crc32go = "16c7d4b8";
        $(".ofw-dl > a").prop("href", "http://du01.psp.update.playstation.org/update/psp/image/us/2014_1212_6be8878f475ac5b1a499b95ab2f7d301/EBOOT.PBP")
        $(".ofw-dl > a").prop("title", "CRC32: " + crc32)
        $(".ofw-go-dl > a").prop("href", "http://du01.psp.update.playstation.org/update/psp/image2/us/2014_1212_fd0f7d0798b4f6e6d32ef95836740527/EBOOT.PBP")
        $(".ofw-go-dl > a").prop("title", "CRC32: " + crc32go)
        $("#cfw option[value='1']").prop("disabled", false)
        $("#cfw option[value='3']").prop("disabled", false)
    }

    if (ofwval == 2) { // 6.60 links from Sony's update server
        const crc32 = "0aa03672";
        const crc32go = "fbb06781";
        $(".ofw-dl > a").prop("href", "http://du01.psp.update.playstation.org/update/psp/image/us/2011_0810_2ca64d59dcf48f45fb99b400a586b395/EBOOT.PBP")
        $(".ofw-dl > a").prop("title", "CRC32: " + crc32)
        $(".ofw-go-dl > a").prop("href", "http://do01b.psp.update.playstation.org/update/psp/image2/us/2011_0810_d1fe58798b133ea4343b4bb1a25d4426/EBOOT.PBP")
        $(".ofw-go-dl > a").prop("title", "CRC32: " + crc32go)
        $("#cfw option[value='1']").prop("disabled", false)
        $("#cfw option[value='3']").prop("disabled", false)
    }

    if (ofwval == 3) { // 6.39
        const crc32 = "dd3e8406";
        const crc32go = "e8dc5640";
        $(".ofw-dl > a").prop("href", "https://www.dropbox.com/scl/fi/uir1hmc6vuznpih37ps2r/EBOOT.PBP?rlkey=xvyuri7dtfpfqx75ntkys5kpc&st=elwwj3jh&dl=1")
        $(".ofw-dl > a").prop("title", "CRC32: " + crc32)
        $(".ofw-go-dl > a").prop("href", "https://www.dropbox.com/scl/fi/zyk9el2jo431egehwsj27/EBOOT.PBP?rlkey=ogpyxmkl4iwvhtkwi00qvcpbu&st=me35q7d0&dl=1")
        $(".ofw-go-dl > a").prop("title", "CRC32: " + crc32go)
        $("#cfw option[value='1']").prop("disabled", true)
        $("#cfw option[value='3']").prop("disabled", false)
    }

    if (ofwval == 4) { // 6.35
        const crc32 = "a7268cd3";
        const crc32go = "8915ba25";
        $(".ofw-dl > a").prop("href", "https://www.dropbox.com/scl/fi/dvkogqnepy131ud5c3ui1/EBOOT.PBP?rlkey=m9x5901z60zi5x52i4q3e3q0c&st=0pb0altx&dl=1")
        $(".ofw-dl > a").prop("title", "CRC32: " + crc32)
        $(".ofw-go-dl > a").prop("href", "https://www.dropbox.com/scl/fi/pjhjdh5jg55dl22mau4at/EBOOT.PBP?rlkey=6ht6pmx6qxvytbvt47pz8gu70&st=jbx2hoo9&dl=1")
        $(".ofw-go-dl > a").prop("title", "CRC32: " + crc32go)
        $("#cfw option[value='1']").prop("disabled", true)
        $("#cfw option[value='3']").prop("disabled", true)
    }

    if (ofwval == 5) { // 6.20
        const crc32 = "ccece489";
        const crc32go = "56a8ccf1";
        $(".ofw-dl > a").prop("href", "https://www.dropbox.com/scl/fi/r9ov9v5l1qt37gw2f4rhb/EBOOT.PBP?rlkey=se6iohi7a471zdh17z200ofqa&st=sgilvwz8&dl=1")
        $(".ofw-dl > a").prop("title", "CRC32: " + crc32)
        $(".ofw-go-dl > a").prop("href", "https://www.dropbox.com/scl/fi/u28a33r8ogsl377ehs8xf/EBOOT.PBP?rlkey=tg6d4v7kdwi7fzuntued5kwbb&st=i5nq8nju&dl=1")
        $(".ofw-go-dl > a").prop("title", "CRC32: " + crc32go)
        $("#cfw option[value='1']").prop("disabled", true)
        $("#cfw option[value='3']").prop("disabled", false)
    }

    $(".cfw-sel").fadeIn();
    $(".ofw-dl").fadeIn();
    $(".ofw-go-dl").fadeIn();
});

cfwsel.on("change", () => {
    var ofwval = $("#fw").val();
    var cfwval = $("#cfw").val();

    if (cfwval == 1 && ofwval == 1 || ofwval == 2) { // 6.61 & 6.60 ARK-4
        $(".cfw-dl > a").prop("href", "https://github.com/PSP-Archive/ARK-4/releases/download/r42069/ARK4.zip")
    }

    if (cfwval == 2 && ofwval == 1) { // 6.61 PRO-C
        $(".cfw-dl > a").prop("href", "https://www.dropbox.com/scl/fi/w1d7zcw69dy8ix2gzs67v/661_PRO-C2_14-02-2015.zip?rlkey=s67l0fa5r6slaiaqpxfjcpatl&st=igpjr8a3&dl=1")
    }

    if (cfwval == 3 && ofwval == 1) { // 6.61 (L)ME
        $(".cfw-dl > a").prop("href", "https://www.dropbox.com/scl/fi/06sp7lqv44hl83gn5wsr7/661_-L-ME.zip?rlkey=t91vusaddjbcqbmoa7gaqobok&st=3vovdhv2&dl=1")
    }

    if (cfwval == 2 && ofwval == 2) { // 6.60 PRO-C
        $(".cfw-dl > a").prop("href", "https://www.dropbox.com/scl/fi/5hjscos9oxp1kyyf6wd61/660_PRO-C2_14-02-2015.zip?rlkey=rp2iop6tidyo3j3ccys2ee3c5&st=uu7e38fp&dl=1")
    }

    if (cfwval == 3 && ofwval == 2) { // 6.60 (L)ME
        $(".cfw-dl > a").prop("href", "https://www.dropbox.com/scl/fi/zcgkksf8q8drxkb5bjktu/660_-L-ME.zip?rlkey=zkr2s71kl3uv9mzx7i7wrxkb7&st=qrzov8u9&dl=1")
    }

    if (cfwval == 2 && ofwval == 3) { // 6.39 PRO-C
        $(".cfw-dl > a").prop("href", "https://www.dropbox.com/scl/fi/mr7i3zwpp17u9x61dj571/639_PRO-C2_14-02-2015.zip?rlkey=qowsmcxoec35fq3z08wz1kq0r&st=6mzoq3sa&dl=1")
    }

    if (cfwval == 3 && ofwval == 3) { // 6.39 (L)ME
        $(".cfw-dl > a").prop("href", "https://www.dropbox.com/scl/fi/3rol6fjgdo9k3heb2r93a/639_-L-ME.zip?rlkey=nmxnnlxsyrzw4d29vuznorwxj&st=zr2gn0jc&dl=1")
    }

    if (cfwval == 2 && ofwval == 4) { // 6.35 PRO-C
        $(".cfw-dl > a").prop("href", "https://www.dropbox.com/scl/fi/35h9andvjpgafiyui8dm4/635_PRO-C2_14-02-2015.zip?rlkey=v3ydmphxlrxvroxv8fy1ra82z&st=l2bomn4q&dl=1")
    }

    if (cfwval == 2 && ofwval == 5) { // 6.20 PRO-C
        $(".cfw-dl > a").prop("href", "https://www.dropbox.com/scl/fi/m7xph3pnx6h7uim9rswnc/620.zip?rlkey=7h2yxe9xvh6l55rb3qnq7pog1&st=30x8zdc4&dl=1")
    }

    if (cfwval == 3 && ofwval == 5) { // 6.20 (L)ME
        $(".cfw-dl > a").prop("href", "https://www.dropbox.com/scl/fi/0xk3cn63tcf4jidnq09os/620_-L-ME.zip?rlkey=rocff9abws10ifpsc4khp5lnm&st=unggsz97&dl=1")
    }
    $(".cfw-dl").fadeIn();
});
