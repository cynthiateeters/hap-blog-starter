/**
 * HAP Cloudinary Image Configuration
 *
 * All HAP poses with verified Cloudinary version numbers
 * Source: reports/hap-cloudinary-complete-inventory.md
 */

export default {
  cloudName: 'cynthia-teeters',
  baseUrl: 'https://res.cloudinary.com/cynthia-teeters/image/upload',

  // HAP poses with verified version numbers
  poses: {
    'laptop': { filename: 'hap-laptop_xiewar', version: '1759495998' },
    'waving': { filename: 'hap-waving_dgzacg', version: '1759495998' },
    'learner': { filename: 'HAP-learner_dvehmt', version: '1759497938' },
    'confused': { filename: 'hap-confused-map_q8q0ej', version: '1759495999' },
    'broke-things': { filename: 'hap-broke-things_qtbum4', version: '1763230414' },
    'celebrating': { filename: 'hap-celebrating_bljvgl', version: '1762699548' },
    'brain-explodes': { filename: 'hap-brain-explodes_wu0or8', version: '1763230331' },
    'thumbs-up': { filename: 'hap-thumbs-up_s4si0j', version: '1763230522' },
    'lectures': { filename: 'hap-lectures_fjnxdj', version: '1763230356' },
    'scientist': { filename: 'hap-scientist_safwtg', version: '1763230817' },
    'sconcerned-laptop': { filename: 'hap-sconcerned-laptop_frh5ua', version: '1763230464' },
    'tools-wave': { filename: 'hap-tools-wave_d31zdx', version: '1763230781' },
    'has-tools': { filename: 'hap-has-tools_kgoeys', version: '1763230490' },
    'w-bug': { filename: 'hap-w-bug_fztbl6', version: '1763230718' },
    'juggles': { filename: 'hap-juggles_v2zxeq', version: '1763230577' },
    'letters': { filename: 'hap-letters_ofhkso', version: '1760118766' },
    'recharges': { filename: 'hap-recharges_pjgkdv', version: '1763230547' },
    'easter-egg': { filename: 'hap-easter-egg_xw3o7x', version: '1759674685' },
    'dj': { filename: 'hap-dj', version: '1759331576' },
    'chef': { filename: 'hap-chef', version: '1759331578' },
    'page-swirl': { filename: 'hap-page-swirl_jad9ji', version: '1763230755' }
  },

  /**
   * Build Cloudinary URL for HAP pose
   * @param {string} poseName - Short name like 'laptop', 'waving', etc.
   * @param {number} width - Width in pixels (80, 100, 120, 150, 200)
   * @returns {string} Full Cloudinary URL
   */
  getHapPoseUrl(poseName, width = 150) {
    const pose = this.poses[poseName];
    if (!pose) {
      throw new Error(`Unknown HAP pose: ${poseName}. Available poses: ${Object.keys(this.poses).join(', ')}`);
    }

    return `${this.baseUrl}/f_auto,q_auto,w_${width},c_limit/v${pose.version}/${pose.filename}.jpg`;
  }
};
