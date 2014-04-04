Ext.define('HUDTenant.model.Data', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
                    {name:'id', type: 'int', isUnique:true},
                    { name: 'adults', type: 'int', defaultValue: 1 },
                    { name: 'seniors', type: 'int', defaultValue: 0 },
                    { name: 'youth', type: 'int', defaultValue: 0 },
                    { name: 'fulltime', type: 'int', defaultValue: 0 },
                    { name: 'disabled', type: 'boolean', defaultValue: false },
                    { name: 'totalincome', type: 'int', defaultValue: 0 },
                    { name: 'totalassets', type: 'int', defaultValue: 0 },
                    { name: 'totalexpectedassets', type: 'int', defaultValue: 0 },
                    { name: 'totalexpenses', type: 'int', defaultValue: 0 },
                    { name: 'utilityallowance', type: 'int', defaultValue: 0 }
        ],
        proxy: {
            type: 'localstorage',
            id  : 'hud-tenat'
        }
    },

    disabledInt : function(){
        if (this.get('disabled')){
            return 1;
        }
        else{
            return 0;
        }
    },

    ttp : function(){

        //console.log(this.$className);
        var youthAllowance = this.get('youth')*480,
            seniorsAllowance = this.get('seniors')*400,
            disabledAllowance = this.disabledInt()*400,
            fullTimeAllowance = this.get('fulltime')*400,
            allowances = youthAllowance + seniorsAllowance + disabledAllowance + fullTimeAllowance,
            income = this.get('totalincome'),
            totalAssets = this.get('totalassets'),
            passBookRate = 0.02,
            totalExpectedAssets = this.get('totalexpectedassets'),
            totalExpenses = this.get('totalexpenses'),
            ImputedAssetIncome, finalAssetIncome, totalAnnualIncome,
            adjustedAnnualIncome, totalMonthlyIncome, TTPifBasedonAnnualIncome,
            AdjustedMonthlyIncome, TTPIfBasedOnAdjustedAnnualIncome,
            MinimumRent = 50, TTP;


        if (totalExpectedAssets <= 5000)
            ImputedAssetIncome = 0;
        else
            ImputedAssetIncome = totalExpectedAssets * 0.02;

        finalAssetIncome = Math.max(ImputedAssetIncome,totalExpectedAssets);

        totalAnnualIncome = income + finalAssetIncome;

        adjustedAnnualIncome = Math.max(totalAnnualIncome - allowances, 0); //8a minus 8x

        totalMonthlyIncome = income / 12;
//                    9a. Total monthly income: 8a ÷ 12 $ 9a.
        TTPifBasedonAnnualIncome = Math.round(totalMonthlyIncome * 0.10);
//                    9c. TTP if based on annual income: 9a X 0.10 $ 9c.
        AdjustedMonthlyIncome = adjustedAnnualIncome / 12;
//                    9d. Adjusted monthly income: 8y ÷ 12 $ 9d.

//                    9e. Percentage of adjusted monthly income: use 30% for Section 8 9e.
        TTPIfBasedOnAdjustedAnnualIncome = Math.round(AdjustedMonthlyIncome * 0.30);
//                    9f. TTP if based on adjusted annual income: (9d X 9e) ÷ 100 $ 9f.
//                    9g. Welfare rent per month (if none, put 0) $ 9g.
//                    9h. Minimum rent (if waived, put 0) $ 9h.
//                    9i. Enhanced Voucher minimum rent $ 9i.
        TTP = Math.max(TTPifBasedonAnnualIncome, TTPIfBasedOnAdjustedAnnualIncome, MinimumRent);
//                    9j. TTP, highest of lines 9c, 9f, 9g, 9h, or 9i $ 9j.
//                    9k. Most recent TTP $ 9k.
//                    9m. Qualify for minimum rent hardship exemption
        return TTP;
    },

    tenantRent : function(){
        var utilityAllowance = this.get('utilityallowance');
        return this.ttp() - utilityAllowance;
    }
});