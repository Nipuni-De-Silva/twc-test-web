import female from '../../assets/female.png';
import male from '../../assets/male.png';

function ProfilePic ({gender}: {gender: string}) {
    let url = male
    if (gender === 'Female' || gender === 'female') {
        url = female
    }
    return (
        <div className="w-[50px] h-[50px] rounded-full bg-slate-100" >
            <img src={url} alt="" />
        </div>
    )
}

export default ProfilePic