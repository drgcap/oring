
      function showSelect(b){
        resetFilterCat(false);
        document.getElementById("sacS").style.display = "inline";
        document.getElementById("sacS").selectedIndex = 0;
        ops = document.getElementById('sacS').getElementsByTagName('option');
        for (i = 0; i < ops.length; i++) {
            if (ops[i].value == 'YJM'|| ops[i].value == 'JM'|| ops[i].value == 'YJW'|| ops[i].value == 'JW'){
                if (b){
                        ops[i].disabled = true
                }
                else{
                        ops[i].disabled = false
                    }
            }
        }
    }

    function getRuCat(s,c){
        var ac = false;
        switch(s) {
        case 'M21': case 'M35': case 'M20': case 'M18': case 'M16':
            if (c=='SM'){
                ac = true;
            }
            break;
        case 'M40': case 'M45': case 'M50':
            if (c== 'SM' || c =='VM'){
                ac = true;
            }
            break;
        case 'M55': case 'M60':
            if (c== 'SM'|| c =='VM' || c=='SVM'){
                ac = true;
            }
            break;
        case 'M65': case 'M70':
            if (c== 'SM' || c =='VM' || c=='SVM' || c=='UVM'){
                ac = true;
            }
            break;
        case 'M75': case 'M80': case 'M85': case 'M90':
            if (c== 'SM' || c =='VM' || c=='SVM' || c=='UVM' || c=='HVM'){
                ac = true;
            }
            break;
        case 'W21': case 'W35': case 'W18': case 'W20': case 'W16':
            if (c== 'SW'){
                ac = true;
            }
            break;
        case 'W40':case 'W45': case 'W50':
            if (c== 'SW' || c=='VW'){
                ac = true;
            }
            break;
        case 'W55': case 'W60':
            if (c== 'SW' || c=='VW' || c== 'SVW'){
                ac = true;
            }
            break;
        case 'W65': case 'W70':
            if (c== 'SW' || c=='VW' || c== 'SVW' || c== 'UVW'){
                ac = true;
            }
            break;                
        case 'W75': case 'W80': case 'W85': case 'W90':
            if (c== 'SW' || c=='VW' || c== 'SVW' || c== 'UVW' || c== 'HVW'){
                ac = true;
            }
            break;
        default:
            ac = false;
        }
        return ac;
    }

    function getAgeCat(s){
        var ac
        switch(s) {
        case 'M18': case 'M20': case 'M21': case 'M35': 
            ac = 'SM';
            break;
        case 'M40': case 'M45': case 'M50':
            ac = 'VM';
            break;
        case 'M55': case 'M60':
            ac = 'SVM';
            break;
        case 'M65': case 'M70':
            ac = 'UVM';
            break;
        case 'M75': case 'M80': case 'M85': case 'M90':
            ac = 'HVM';
            break;
        case 'M14': case 'M16': 
            ac = 'JM';
            break;
        case 'M10':case 'M12': 
            ac = 'YJM';
            break;              
        case 'W18': case 'W20': case 'W21': case 'W35': 
            ac = 'SW';
            break;
        case 'W40': case 'W45': case 'W50':
            ac = 'VW';
            break;
        case 'W55': case 'W60':
            ac = 'SVW';
            break;
        case 'W65': case 'W70':
            ac = 'UVW';
            break;                
        case 'W75': case 'W80': case 'W85': case 'W90':
            ac = 'HVW';
            break;
        case 'W14': case 'W16': 
            ac = 'JW';
            break;
        case 'W10': case 'W12': 
            ac = 'YJW';
            break;              
        default:
            ac = 'minor';
        }
        return ac;
    }

    function resetFilterCat(b){
    // shows all values and resets input elements to original state
        var table, tr
        table = document.getElementById("tab");
        tr = table.getElementsByTagName("tr");
            for (i = 0; i < tr.length; i++) {
                tr[i].style.display  = "table-row";
            }
        if (b){
            document.getElementById("sacS").style.display = "none";
        }
    }

    function filterCat(v){
        var table, tr, td, ft,ac
        table = document.getElementById("tab");
        tr = table.getElementsByTagName("tr");
        ft = document.getElementById('sac').checked
        
        if (ft){
            for (i = 0; i < tr.length; i++) {
                td = tr[i].getElementsByTagName("td")[4];
                ac = getAgeCat(td.textContent)
                if (ac != v)
                    {
                        tr[i].style.display  = "none";
                    }
                else {
                        tr[i].style.display  = "table-row";                            }
            }
        }
        if (!ft){
            for (i = 0; i < tr.length; i++) {
                td = tr[i].getElementsByTagName("td")[4];
                ac = getRuCat(td.textContent,v)
                if (ac)
                    {
                        tr[i].style.display  = "table-row";
                    }
                else {
                        tr[i].style.display  = "none";                            }
            }
        }
    }
